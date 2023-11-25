import React, { useState } from "react";
import img from "../logo.svg";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/endpoints";

function Add() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const redirectTo = useNavigate(); //method redirect hook to routerdom
  function handlerCreateData(event) {
    event.preventDefault();
    api
      .storeData(inputData)
      .then((res) => {
        alert("Successfully Create Data");
        redirectTo("/");
      })
      .catch((error) => console.log(error.response));
  }
  return (
    <div className="d-flex w-100 justify-content-center align-items-center">
      <div className="w-50 border bg-light p-5">
        <center>
          <img src={img} alt="logo img" width={150} height={150} />
        </center>
        <form onSubmit={handlerCreateData}>
          <div className="form-group">
            <label id="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
              name="name"
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
              required
            ></input>
          </div>
          <br />
          <div className="form-group">
            <label id="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter Email"
              name="email"
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
              required
            ></input>
          </div>
          <br />
          <div className="form-group">
            <label id="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              aria-describedby="emailHelp"
              placeholder="Enter Password"
              name="password"
              onChange={(e) =>
                setInputData({ ...inputData, password: e.target.value })
              }
              required
            ></input>
          </div>
          <br />
          <div className="form-group">
            <label id="password_confirmation">Password Confirmation</label>
            <input
              type="password"
              className="form-control"
              id="password_confirmation"
              aria-describedby="emailHelp"
              placeholder="Enter Password Confirmation"
              name="password_confirmation"
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  password_confirmation: e.target.value,
                })
              }
              required
            ></input>
          </div>
          <br />
          <div className="text-first">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        <hr />
        <div className="text-first">
          <Link to="/" className="btn btn-warning">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Add;
