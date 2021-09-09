const { Class } = require("../models");

const resolvers = {
  Query: {
    classes: () => Class.find({}),
  },
};

module.exports = resolvers;
