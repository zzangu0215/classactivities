const { School, Class, Professor } = require("../models");

const resolvers = {
  Query: {
    schools: () => {
      return School.find({}).populate("classes").populate({
        path: "classes",
        populate: "professor",
      });
    },
    classes: () => {
      return Class.find({}).populate("professor");
    },
    // TODO: Update resolver to include classes
    professors: () => {
      return Professor.find({}).populate("classes");
    },
  },
};

module.exports = resolvers;
