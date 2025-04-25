import React, { useState } from "react";

const ProgressBar = () => {
  const [filled, setFilled] = useState(250);
  const [inputValue, setInputValue] = useState('50');

  const onInputChange = (e) => {
    const val = e.target.value;
        if (val === '' || (Number(val) >= 1 && Number(val) <= 100)) {
            setInputValue(val);
            setFilled(val * 5);
        }
  };
  return (
    <>
      {filled === 500 ? <div className="popup"></div>:''}
      <>
      <h1 className="text">Enter your Progress Here</h1>
      <input
        type="number"
        name="progress"
        id="preogress"
        className="input-number"
        onChange={(e) => onInputChange(e)}
        value={inputValue}

      />
      <span className="logo">%</span>
      <div className="progressbar-container">
        <div className="progress" style={{ width: `${filled}px` }}></div>
      </div>
      </>
    </>
  );
};

export default ProgressBar;
