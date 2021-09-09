const db = require("../config/connection");
const { School, Class, Professor } = require("../models");

const schoolData = require("./schoolData.json");
const classData = require("./classData.json");
const professorData = require("./professorData.json");

db.once("open", async () => {
  try {
    await db.dropDatabase();

    // bulk create each model
    const [schools, classes, professors] = await Promise.all([
      School.insertMany(schoolData),
      Class.insertMany(classData),
      Professor.insertMany(professorData),
    ]);

    classes.forEach((newClass) => {
      // add to random school
      const tempSchool = schools[Math.floor(Math.random() * schools.length)];
      tempSchool.classes.push(newClass._id);

      // randomly add a professor to each class
      const tempProfessor =
        professors[Math.floor(Math.random() * professors.length)];
      newClass.professor = tempProfessor._id;

      // reference class on professor model, too
      tempProfessor.classes.push(newClass._id);
    });

    // commit changes to the database
    await Promise.all([
      ...schools.map((s) => s.save()),
      ...classes.map((c) => c.save()),
      ...professors.map((p) => p.save()),
    ]);

    console.log("all done!");
    process.exit(0);
  } catch (error) {
    console.log("Something went wrong!");
    console.error(error);
    process.exit(1);
  }
});
