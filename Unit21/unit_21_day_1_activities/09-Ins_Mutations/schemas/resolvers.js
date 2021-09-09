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
    class: (parent, args) => {
      return Class.findById(args.id);
    },
    professors: () => {
      return Professor.find({}).populate("classes");
    },
  },
  // Define the functions that will fulfill the mutations
  Mutation: {
    addSchool: (parent, { name, location, studentCount }) => {
      // Create and return the new School object
      return School.create({ name, location, studentCount });
    },
  },
};

module.exports = resolvers;
