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
  Mutation: {
    addSchool: (parent, { name, location, studentCount }) => {
      return School.create({ name, location, studentCount });
    },
    updateClass: (parent, { id, building }) => {
      // Find and update the matching class using the destructured args
      return Class.findOneAndUpdate(
        { _id: id },
        { building },
        // Return the newly updated object instead of the original
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
