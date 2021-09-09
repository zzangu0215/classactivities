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

    // TODO: Add a new resolver for a single Class object
    class: (parent, args, context, info) => {
      return Class.findById(args.id).populate("professor");
    },

    professors: () => {
      return Professor.find({}).populate("classes");
    },
  },
};

module.exports = resolvers;
