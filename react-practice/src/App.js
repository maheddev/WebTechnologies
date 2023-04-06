/* eslint-disable eqeqeq */
import React from "react";
import "./App.css";

function App() {
  const [name, setName] = React.useState("");
  const [regNum, setRegNum] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [data, setData] = React.useState([]);

  const handleSubmit = () => {
    if (
      name != "" &&
      gender != "" &&
      regNum != "" &&
      email != "" &&
      contact != ""
    ) {
      setData([
        ...data,
        {
          name: name,
          RegistrationNumber: regNum,
          contactNumber: contact,
          gender: gender,
          emailAddress: email,
        },
      ]);
    } else {
      alert("Please Enter data in all the fields");
    }
  };

  return (
    <div className="App">
      <div className="inputs">
        <input
          type="text"
          className="input-group"
          placeholder="Full Name"
          onInput={(i) => setName(i.target.value)}
        ></input>
        <input
          type="text"
          className="input-group"
          placeholder="Registration Number"
          onInput={(i) => setRegNum(i.target.value)}
        ></input>
        <input
          type="text"
          className="input-group"
          placeholder="Gender"
          onInput={(i) => setGender(i.target.value)}
        ></input>
        <input
          type="text"
          className="input-group"
          placeholder="Contact Number"
          onInput={(i) => setContact(i.target.value)}
        ></input>
        <input
          type="email"
          className="input-group"
          placeholder="Email Address"
          onInput={(i) => setEmail(i.target.value)}
        ></input>
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <h1>Data</h1>
      <div className="name-container">
        {data.map((i) => {
          return (
            <div className="name-list">
              <h3>{i.name}</h3>
              <p>{i.emailAddress}</p>
              <p>{i.contactNumber}</p>
              <p>{i.RegistrationNumber}</p>
              <p>{i.gender}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
