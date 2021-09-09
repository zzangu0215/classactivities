const randomNum = () => Math.floor(Math.random() * 20);

export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_STUDENT": {
      const newID = randomNum();
      const newStudent = { ...action.payload, id: newID };

      return {
        ...state,
        students: [...state.students, newStudent],
      };
    }

    case "REMOVE_STUDENT": {
      return {
        ...state,
        students: [...state.students].filter(
          (student) => student.id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
}
