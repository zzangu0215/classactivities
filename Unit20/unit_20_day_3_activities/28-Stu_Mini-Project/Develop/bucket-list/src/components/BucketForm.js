import React, { useState } from "react";

function BucketForm(props) {
  const [input, setInput] = useState(props.edit?.text || "");
  const [eagerness, setEagerness] = useState(props.edit?.eagerness || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {};
    item.id = props.edit?.id || Math.random(Math.floor() * 1000) + Date.now();
    item.text = input;
    item.eagerness = eagerness || "low";

    props.onSubmit(item);
    setInput("");
    setEagerness("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !props.edit ? (
    <div>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to your bucket list"
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || "Priority"}
          </button>
          <div className="dropdown-content">
            {/* TODO: Add an onClick events that will set the corresponding eagerness level to "low", "medium", or "high" */}
            <p onClick={() => {}}>Must do</p>
            <p onClick={() => {}}>Want to do</p>
            <p onClick={() => {}}>Take it or leave it</p>
          </div>
        </div>
        <button className="bucket-button">Add bucket list item</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit.value}
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || "Priority"}
          </button>
          <div className="dropdown-content">
            {/* TODO: Add an onClick events that will set the corresponding eagerness level to "low", "medium", or "high" */}
            <p onClick={() => {}}>Must do</p>
            <p onClick={() => {}}>Want to do</p>
            <p onClick={() => {}}>Take it or leave it</p>
          </div>
        </div>
        <button className="bucket-button">Update</button>
      </form>
    </div>
  );
}

export default BucketForm;
