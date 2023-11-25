import React from "react";
import img from "../logo.svg";
import { Link } from "react-router-dom";

function Add() {
  return (
    <div className="d-flex w-100 justify-content-center align-items-center">
      <div className="w-50 border bg-light p-5">
        <center>
          <img src={img} alt="logo img" width={150} height={150} />
        </center>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
            ></input>
          </div>
          <br />
          <div className="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Email"
            ></input>
          </div>
          <br />
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Password"
            ></input>
          </div>
          <br />
          <div className="form-group">
            <label for="exampleInputPassword1">Password Confirmation</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Password Confirmation"
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
