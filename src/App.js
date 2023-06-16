import React, { useState } from "react";

const SquareComponent = () => {
  const [color1, setColor1] = useState("red");
  const [color2, setColor2] = useState("blue");

  const handleClick = () => {
    setColor1(color2);
    setColor2(color1);
  };

  return (
    <div>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color1,
          display: "inline-block",
          margin: "10px",
        }}
        onClick={handleClick}
      ></div>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color2,
          display: "inline-block",
          margin: "10px",
        }}
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default SquareComponent;
