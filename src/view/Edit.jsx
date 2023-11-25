import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../logo.svg";
import { useParams } from "react-router-dom";
import api from "../api/endpoints";

function Edit() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    api
      .detailData(id)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  });
  return (
    <div className="d-flex w-100 justify-content-center align-items-center">
      <div className="w-50 border bg-light p-5">
        <center>
          <img src={img} alt="logo img" width={150} height={150} />
        </center>
        <form>
          <div className="form-group">
            <label id="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
              name="name"
              required
              value={data.name}
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
              required
              value={data.email}
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

export default Edit;
