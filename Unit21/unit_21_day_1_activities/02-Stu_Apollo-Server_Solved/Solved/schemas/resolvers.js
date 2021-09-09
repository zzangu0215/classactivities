const { Class } = require("../models");

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    classes: () => {
      // Get and return a promise for all documents from the classes collection
      return Class.find({});
    },
  },
};

module.exports = resolvers;
