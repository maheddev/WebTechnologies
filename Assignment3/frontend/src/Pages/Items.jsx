import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Products from "../Components/Products";
function Items() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setData([]);
      await axios
        .get("http://localhost:1000/api/getItems")
        .then((response) => setData(response.data.data));
    };
    fetchData();
  }, []);
  console.log(Data)
  return (
    <div className="bg-dark" style={{ minHeight: "93vh" }}>
      <div
        className="d-flex justify-content-center align-items-center py-3"
        style={{ minHeight: "" }}
      >
        <h2 className="text-white">Products</h2>
      </div>
      {Data ? (
        <Products data={Data}/>
      ) : (
        <div className="text-white">Loading</div>
      )}
    </div>
  );
}

export default Items;
