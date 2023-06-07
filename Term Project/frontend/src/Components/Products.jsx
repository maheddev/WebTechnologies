/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Products.css";
function Products({ data }) {
  console.log(data);
  const sofaChair = require("../Assets/sofa-chair.png");
  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap">
      {data.map((d) => {
        return (
          <div
            className="card d-flex justify-content-center align-items-center m-4 p-2"
            style={{
              height: "350px",
              width: "300px",
              backgroundColor: "#fff",
              textAlign: "center",
            }}
          >
            <div>
              <img
                style={{ width: "100px", height: "120px" }}
                src={sofaChair}
                alt="Image gg"
                className="img-fluid"
              />
            </div>
            <h4>{d.title.split(0, 29)}</h4>
            <p>{d.description}</p>
            <h5 className="text-success">{d.price} $</h5>
            <h5 className="text-danger">Remaining Stock: {d.quantity}</h5>
            <button className="AddToCart">Add to Cart!</button>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
