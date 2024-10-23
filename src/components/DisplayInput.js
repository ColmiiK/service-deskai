// src/components/DisplayInput.js
import React from "react";
import { useSelector } from "react-redux";

const DisplayInput = () => {
  const inputValue = useSelector((state) => state.input.inputValue); // Access the input value from Redux state

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Submitted Value:</h2>
      <p>{inputValue}</p>
    </div>
  );
};

export default DisplayInput;
