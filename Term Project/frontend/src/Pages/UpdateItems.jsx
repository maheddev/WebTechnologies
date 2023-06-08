import axios from "axios";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
function UpdateItems() {
  const { id } = useParams();
  const [data, setData] = React.useState({
    title: "",
    description: "",
    image: "",
    price: "",
    quantity: "",
  });
  const navigation = useNavigate();
  React.useEffect(() => {
    const fetchData = async () => {
      setData([]);
      await axios
        .get("http://localhost:1000/api/getItems/" + id)
        .then((response) =>
          setData({
            title: response.data.title,
            description: response.data.description,
            quantity: response.data.quantity,
            price: response.data.price,
            image: response.data.image,
          })
        );
    };
    fetchData();
  }, []);
  const valueChanged = (val) => {
    const { name, value } = val.target;
    setData({ ...data, [name]: value });
  };
  const postUrl = "http://localhost:1000/api/update/"+id;
  const submit = async (event) => {
    //Avoid Refreshing
    event.preventDefault();
    await axios.put(postUrl, data).then((response) => {
        console.log(response)});
        navigation('/items')
  };
  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-center flex-column"
      style={{ minHeight: "93vh" }}
    >
      <h1 className="text-white">UPDATE PRODUCTS</h1>

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
          />
        </div>
        <button className="btn btn-success my-3" onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default UpdateItems;
