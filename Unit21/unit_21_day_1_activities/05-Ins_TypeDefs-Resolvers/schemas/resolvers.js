const { School, Class, Professor } = require("../models");

const resolvers = {
  Query: {
    schools: () => {
      // Populate the classes and professor subdocuments when querying for
      // schools
      return School.find({}).populate("classes").populate({
        path: "classes",
        populate: "professor",
      });
    },
    classes: () => {
      // Populate the professor subdocument when querying for classes
      return Class.find({}).populate("professor");
    },
    professors: () => {
      return Professor.find({});
    },
  },
};

module.exports = resolvers;
