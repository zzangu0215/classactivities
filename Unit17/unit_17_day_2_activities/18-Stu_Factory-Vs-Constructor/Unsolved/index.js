// TODO: Refactor the class to a factory function.
// class Lesson {
//   constructor() {
//     this.title = "Unit 17 - Computer Science";
//     this.description = "CS for JS";
//   }

//   information() {
//     console.log(this.title, this.description);
//   }
// }

const callInfo = (state) => ({
  information: () => console.log(`${state.title} ${state.description}`),
});

const createLesson = (title, description) => {
  const state = {
    title,
    description,
  };

  return { ...callInfo(state) };
};

// const csForJS = new Lesson();
const subject = "Computer Science";

const csForJS = createLesson(`Unit 17 - ${subject}`, "CS for JS");
csForJS.information();
// csForJS.information();
