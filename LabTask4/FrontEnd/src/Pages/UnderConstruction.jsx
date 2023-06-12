import React from "react";

function UnderConstruction() {
    const image = require("../Assets/cons.png")
  return (
    <div
    className="bg-dark d-flex text-white justify-content-center align-items-center"
      style={{
        width: "100%",
        height: "86.9vh",
      }}
    >
      <img src={image} alt="" style={{maxWidth: '50%'}}/>
    </div>
  );
}

export default UnderConstruction;
