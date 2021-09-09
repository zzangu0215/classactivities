import React from "react";
import { useCount } from "../CountContext";

function CardBody() {
  const { count, handleDecrement, handleIncrement } = useCount();

  return (
    <div className="card-body">
      <p className="card-text">Click Count: {count}</p>
      <button
        type="button"
        className="btn btn-danger"
        style={{ marginRight: "5px" }}
        onClick={handleDecrement}
      >
        Decrement
      </button>
      <button
        type="button"
        className="btn btn-primary"
        style={{ marginLeft: "5px" }}
        onClick={handleIncrement}
      >
        Increment
      </button>
    </div>
  );
}

export default CardBody;
