import React, { useEffect } from "react";
import ThemeComponent from "./components/ThemeComponent";

export default function App() {
  useEffect(() => {
    document.title = "Unit 22.1: useReducer";
  }, []);

  return <ThemeComponent />;
}
