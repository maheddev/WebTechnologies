/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Products.css";
import UpdateItems from "../Pages/UpdateItems";
import { Link } from "react-router-dom";
import axios from "axios";
function Products({ data }) {
  console.log(data);
  const sofaChair = require("../Assets/sofa-chair.png");
  const deleteData = (index) => {
    axios
      .delete("http://localhost:1000/api/delete/" + index)
      .then((response) => window.location.reload());
  };
  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap">
      {data.map((d, i) => {
        return (
          <div
            className="card d-flex justify-content-center align-items-center m-4 p-2"
            style={{
              height: "480px",
              width: "350px",
              backgroundColor: "#fff",
              textAlign: "center",
            }}
          >
            <div>
              <img
                style={{ width: "220px", height: "220px", borderRadius: '8px' }}
                src={d.image}
                alt="Image gg"
                className="img-fluid my-3"
              />
            </div>
            <h4>{d.title.slice(0,20)}</h4>
            <p>{d.description.slice(0,50)}...</p>
            <h5 className="text-success" style={{fontWeight:"bold"}}>{d.price} $</h5>
            <h5 className="text-danger">Remaining Stock: {d.quantity}</h5>
            <div className="button-container">
              <Link className="AddToCart" to={`/update/${d._id}`} id="update">
                UPDATE
              </Link>
              <button
                className="AddToCart"
                id="delete"
                onClick={() => deleteData(d._id)}
              >
                DELETE
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
