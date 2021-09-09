import React from "react";
// TODO: Fix the return statement so that it renders an `h1` heading tag that introduces the creator
function HelloDiv() {
  const name = "Jun Park";
  // return "Hello";
  return (
    <div className="container">
      <h1>Hello! My name is {name}</h1>
      <p>Here are my interests</p>
      <ul className="parent">
        <li>Soccer</li>
        <li>League of Legends</li>
        <li>Coding</li>
        <li>Walking</li>
      </ul>
    </div>
  );
}

// TODO: Fix the export statement
// Export statements are ES6 syntax that tell Javascript what "thing" we want to make available outside of this file
export default HelloDiv;
