const { Class } = require("../models");

// TODO: Add a comment describing the functionality of this expression
const resolvers = {
  Query: {
    classes: () => {
      // TODO: Add a comment describing the functionality of this statement
      return Class.find({});
    },
  },
};

module.exports = resolvers;
