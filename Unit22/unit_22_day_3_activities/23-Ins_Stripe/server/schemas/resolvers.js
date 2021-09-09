// To use Stripe, we must first install the necessary dependencies using npm.
// (e.g. "npm i stripe" in the server folder and "npm i @stripe/react-stripe-js
// @stripe/stripe-js" in the client folder)

const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Order } = require('../models');
const { signToken } = require('../utils/auth');

// The stripe secret api key (starts with sk) should be kept out of source code.
// Keep it secret by using an environmental variable and placing it in your
// Heroku config. The API key is in the code for demonstration. (e.g.
// process.env.STRIPE_KEY)
const STRIPE_KEY = "sk_test_4eC39HqLyjWDarjtT1zdp7dc";

// Import stripe and initialize it with the stripe api secret key
const stripe = require('stripe')(STRIPE_KEY);

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Product.find(params).populate('category');
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate('category');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category',
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category',
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    // The checkout resolver creates a checkout session with strip and returns
    // the id of the session issued by stripe. The resolver takes a `products`
    // arg which is an array of product ids.
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });

      // line_items is used to create a checkout session with stripe
      const line_items = [];

      // Get the product data from MongoDB
      const { products } = await order.populate('products').execPopulate();

      // Add each product and a price to stripe.
      for (let i = 0; i < products.length; i++) {
        // Add product data to the stripe api
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`],
        });

        // Create a price for the product in the stripe api.
        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100, // stripe expects prices in cents for USD
          currency: 'usd',
        });

        // add the price and quantity to the line items for the checkout session
        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      // create a checkout session with stripe api
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        // provide a url stripe should redirect the user to after successful payment
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,

        // provide a url stripe should redirect the user to after canceling payment
        cancel_url: `${url}/`,
      });

      // return the stripe session id to the client
      return { session: session.id };
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
