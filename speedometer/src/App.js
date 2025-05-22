import React, { useState } from "react";
import Gauge from "./components/Gauge";
import Needle from "./components/Needle";
import "./App.css";
function App() {
  const [val, setVal] = useState(0);
  const handleChange = (e) => {
    let value = e.target.value || 0;
    let placeholder = value;
    if (placeholder > 270) {
      placeholder = 270;
    } else if (placeholder < 0) {
      placeholder = 0;
    }
    setVal(placeholder);
    value = Math.min((parseInt(value)-130),130);
    const needleElem = document.querySelector(".needleContainer");
    needleElem.style.transform = `translate(-48%, calc(-100% - 20px)) rotate(${value}deg)`;
    needleElem.style.transition = "transform 1s ease-in-out";
  };
  return (
    <div className="container">
      <div className="gaugeContainer">
        <Gauge />
      </div>
      <div className="backgroundCircle">
        <div className="internalBackgroundCircle"></div>
      </div>

      <p className="heading-1">Enter Angle</p>
      <p className="heading-2">To rotate</p>
      <div className="needleContainer">
        <Needle />
      </div>
      <div className="overlayCircle"></div>
      <input
        type="number"
        onChange={(e) => {
          handleChange(e);
        }}
        placeholder="hiii"
        className="inputClasses"
        value={val}
      />
    </div>
  );
}

export default App;
