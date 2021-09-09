// TODO: Import useReducer so that we can use it in this component
import React, { useState, useReducer } from "react";

// TODO: Import our action types to add and remove students
import {
  ADD_STUDENT,
  REMOVE_STUDENT,
  UPDATE_STUDENT,
  ADD_MAJOR,
  REMOVE_MAJOR,
} from "../utils/actions";

// TODO: Import our reducer
import { reducer } from "../utils/reducers";

// define initial state
const initialState = {
  students: [
    {
      id: 1,
      name: "Sayid",
      major: "Computer Science",
    },
    {
      id: 2,
      name: "Sun-Hwa",
      major: "Data Science",
    },
  ],

  // List of options for the student major
  majors: [
    "Mathematics",
    "Computer Science",
    "Art",
    "English",
    "Political Science",
    "Journalism",
    "Engineering",
  ],
};

export default function StudentList() {
  // TODO: Initialize `useReducer` hook.
  const [state, dispatch] = useReducer(reducer, initialState);

  // Initialize state for new students and new student majors
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentMajor, setNewStudentMajor] = useState("");

  return (
    <div>
      {/* // TODO: Refactor to access `students` from our state object */}
      {state.students ? (
        <>
          <section className="student-list">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Major</th>
                  <th>Remove</th>
                </tr>
              </thead>

              <tbody>
                {/* // TODO: Refactor to access `students` from our state object */}
                {state.students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.major}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          // TODO: Call dispatch method with an object containing type and payload
                          // Your code here
                          dispatch({
                            type: REMOVE_STUDENT,
                            payload: student.id,
                          });
                        }}
                      >
                        <span role="img" aria-label="delete">
                          ✖️
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="add-student">
              <input
                value={newStudentName}
                onChange={(e) => setNewStudentName(e.target.value)}
                placeholder="New student name..."
                type="text"
              />

              <select
                onChange={(e) => setNewStudentMajor(e.target.value)}
                value={newStudentMajor}
              >
                <option>Choose major...</option>
                {/* // TODO: Refactor to access `students` from our state object */}
                {state.majors.map((major) => (
                  <option key={major} value={major}>
                    {major}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => {
                  // TODO: Call dispatch method with an object containing type
                  // and payload. Use newStudentMajor and newStudentName to get
                  // the user input.
                  dispatch({
                    type: ADD_STUDENT,
                    payload: {
                      name: newStudentName,
                      major: newStudentMajor,
                    },
                  });
                }}
              >
                Add Student
              </button>
            </div>
          </section>
        </>
      ) : (
        <span>Hmm... seems that there are no students here!</span>
      )}
    </div>
  );
}
