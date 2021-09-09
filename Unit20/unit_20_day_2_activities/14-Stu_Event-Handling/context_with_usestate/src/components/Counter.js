import React from "react";
import CardBody from "./CardBody";
import { CountProvider } from "../CountContext";

export default function Counter() {
  return (
    <CountProvider>
      <div className="card text-center">
        <div className="card-header bg-primary text-white">Click Counter!</div>
        {/* Here we pass two props to CardBody which happen to be the event handlers we created above */}
        <CardBody />
      </div>
    </CountProvider>
  );
}
