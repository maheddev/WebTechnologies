/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable eqeqeq */
import React from "react";
import "./App.css";
import { data } from "./components/data";
function App() {
  console.log(data);
  return (
    <div className="App">
      {data.map((d) => {
        return (
          <div className="Card">
            <img src={d.images[0]} />
            <h1>{d.title.slice(0,20)}..</h1>
          
            <h2 className="price">{d.price} $</h2>
            <h2>{d.brand}</h2>
            <p>{d.description.slice(0,50)}</p>
            <h3>Available: {d.stock} pcs</h3>
            <button type="button" className="buy">Add to Cart </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
