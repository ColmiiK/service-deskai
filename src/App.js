import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Counter from "./components/Counter";
import InputForm from "./components/InputForm";
import DisplayInput from "./components/DisplayInput";

function App() {
  return (
    <div className="App">
      <Counter />
      <InputForm />
      <DisplayInput />
    </div>
  );
}

export default App;
