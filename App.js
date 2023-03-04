import React, { useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [fdata, setFdata] = useState({
    Name: "",
    email: "",
    password: "",
  });
  const [msg, setMsg] = useState();

  const changeHandler = (e) => {
    let name1 = e.target.name;
    let val = e.target.value;
    setFdata({ ...fdata, [name1]: val });
  };


  const submitHandler = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/ins", { fdata }).then((res) => {
      let ack = res.data;
      if (ack === "success") {
        setMsg("Data inserted successfully");
        console.log(msg);
        alert("Data inserted successfully");
      } else {
        setMsg("Data not inserted");
        console.log(msg);
        alert("Data not inserted");
      }
    });
  };

  return (
    <div className="form">
  <h2>Student Card Application</h2>
      <form onSubmit={submitHandler}>
        <label>Name:</label>
        <input
          type="text"
          name="Name"
          value={fdata.Name}
          onChange={changeHandler}
        />

        <label>email:</label>
        <input
          type="text"
          name="email"
          value={fdata.email}
          onChange={changeHandler}
        />

        <label>password:</label>
        <input
          type="password"
          name="password"
          value={fdata.password}
          onChange={changeHandler}
        />
         <label>Date:</label>
        <input
          type="Date"
          name="Date"
          value={fdata.date}
          onChange={changeHandler}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;