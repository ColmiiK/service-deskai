import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateInput } from "../actions/inputActions";

const InputForm = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateInput(input));
    setInput("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{ textAlign: "center", marginTop: "20px" }}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} // Update local input state
        placeholder="Type something..."
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
