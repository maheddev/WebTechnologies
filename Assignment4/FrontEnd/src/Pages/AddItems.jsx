import axios from "axios";
import React from "react";
import { useNavigate } from 'react-router-dom';

function Items() {
  const [data, setData] = React.useState({
    title: "",
    description: "",
    image: "",
    price: "",
    quantity: "",
  });
  const navigate = useNavigate();
  const valueChanged = (val) => {
    const { name, value } = val.target;
    setData({ ...data, [name]: value });
  };
  const url = "http://localhost:1000/api/add";
  const submit = async (event) => {
    if (data.title == "" || data.description == "" || data.image == "" || data.quantity == "" || data.price == "") {
      alert("Fill data in all the Fields")
    }
    else {
      //Avoid Refreshing
      event.preventDefault();
      await axios.post(url, data).then((response) => { navigate('/items') });

    }
  };
  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-center flex-column"
      style={{ minHeight: "93vh" }}
    >
      <h1 className="text-white">ADD PRODUCTS</h1>

      <div className="container p-4">
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Product Name
          </label>
          <input
            type="text"
            name="title"
            className="form-control"
            onChange={valueChanged}
            id="exampleFormControlInput1"
            placeholder="Name of the Product"
            value={data.title}
            required
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Description
          </label>
          <input
            name="description"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={valueChanged}
            placeholder="Description of the Product"
            value={data.description}
            required
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Picture
          </label>
          <input
            type="text"
            name="image"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={valueChanged}
            value={data.image}
            placeholder="URL of the Picture of the product"
            required
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Available Stock
          </label>
          <input
            type="number"
            name="quantity"
            className="form-control"
            id="exampleFormControlInput1"
            value={data.quantity}
            placeholder="Stock Available (Available Items)"
            onChange={valueChanged}
            required
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Price per Unit
          </label>
          <input
            type="number"
            name="price"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Unit Price of the Product"
            onChange={valueChanged}
            value={data.price}
            required
          />
        </div>
        <button className="btn btn-success my-3" onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Items;
