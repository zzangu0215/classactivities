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
    // Define a resolver to retrieve individual classes
    class: (parent, args) => {
      // Use the parameter to find the matching class in the collection
      return Class.findById(args.id).populate("professor");
    },
    professors: () => {
      return Professor.find({}).populate("classes");
    },
  },
};

module.exports = resolvers;
