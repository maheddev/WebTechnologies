import React from "react";
import "./Home.css";
function Home() {
  const sofaChair = require("../Assets/sofa-chair.png");
  return (
    <div className="Home-Page bg-dark text-white container-fluid">
      <div className="container">
        <div className="row container">
          <div
            className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
            style={{ height: "95.5vh" }}
          >
            <h2 style={{ fontSize: "70px" }}>Your Home Decor</h2>
            <button className="ViewMore my-3">View More</button>
          </div>
          <div
            className="col-lg-6 d-flex justify-content-center align-items-center flex-column"
            style={{ height: "95.5vh" }}
          >
            <img src={sofaChair} alt="Hello" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
