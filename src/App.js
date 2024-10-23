import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Counter from "./components/Counter";
import InputForm from "./components/InputForm";
import DisplayInput from "./components/DisplayInput";
import ImageUploader from "./components/ImageUploader";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <ImageUploader />
    </div>
  );
}

export default App;
