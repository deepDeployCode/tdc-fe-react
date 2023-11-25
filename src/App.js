import "./App.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "./api/endpoints";

function App() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  useEffect(() => {
    api.listData().then((data) => {
      setColumns(Object.keys(data.data[0]));
      setRecords(data.data);
    });
  }, []);
  return (
    <div className="container mt-5">
      <div className="text-end">
        <Link to="/tambahdata" className="btn btn-primary">
          Tambah Data
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.nama}</td>
              <td>{d.nickname}</td>
              <td>Update</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
