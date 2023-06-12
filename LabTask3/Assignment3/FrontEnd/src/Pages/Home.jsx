import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  const sofaChair = require("../Assets/sofa-chair.png");
  return (
    <div className="Home-Page bg-dark text-white container-fluid">
      <div className="container">
        <div className="row container">
          <div
            className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
            style={{ height: "95.1vh" }}
          >
            <h2 style={{ fontSize: "50px" }}>Admin Dashboard</h2>
            <Link
              className="ViewMore my-3"
              to="/items"
              style={{ textDecoration: "none" }}
            >
              Proceed to Products!
            </Link>
          </div>
          <div
            className="col-lg-6 d-flex justify-content-center align-items-center flex-column"
            style={{ height: "95.1vh" }}
          >
            <img src={sofaChair} alt="Hello" className="responsive" style={{width: '300px'}}/>
            <Link
              className="ViewMore my-3"
              to="/underConstruction"
              style={{ textDecoration: "none" }}
            >
              Go to Buyer Mode!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
