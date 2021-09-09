import React, { useState, useEffect } from "react";

const initialCount = () => parseInt(localStorage.getItem("myCount")) || 0;

export default function Display() {
  const [count, setCount] = useState(initialCount);

  // When the state changes run this callback
  useEffect(() => {
    // Update the localStorage count variable using the setItem method
    localStorage.setItem("myCount", count);
  }, [count]);

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleReset = () => setCount(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <code>check localStorage in developer console</code>
      <hr />
      <button type="button" onClick={handleIncrease}>
        Increment
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
