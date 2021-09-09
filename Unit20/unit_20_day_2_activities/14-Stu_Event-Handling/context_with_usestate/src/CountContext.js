import { createContext, useContext, useState } from "react";
// create context
const CountContext = createContext(0);

// create/export provider
export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  // Helper function to handle when the user clicks increment
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Helper function to handle when the user clicks decrement
  const handleDecrement = () => {
    setCount(count - 1);
  };

  const providerValue = {
    count,
    handleIncrement,
    handleDecrement,
  };

  return (
    <CountContext.Provider value={providerValue}>
      {children}
    </CountContext.Provider>
  );
};

// create/export hook for consumers
export const useCount = () => useContext(CountContext);
