import React, { useState, useEffect } from "react";
import Shades from "./components/Shades";
import ShadesInput from "./components/ShadeInput";
import "./App.css";
import randomColor from "randomcolor";

function App() {
  const [color, setColor] = useState("");

  useEffect(() => {
    setColor(randomColor());
  }, []);
  const onInputChange = (value) => {
    setColor(value);
  };
  return (
    <div className="App">
      <h1 className="title">Color Shades Generator</h1>
      <ShadesInput color={color} onInputChange={onInputChange}></ShadesInput>
      <Shades color={color}></Shades>
    </div>
  );
}

export default App;
