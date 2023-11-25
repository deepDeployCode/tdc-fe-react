import "./App.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "./api/endpoints";

function App() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const RedirectTo = useNavigate();
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
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.created_at}</td>
              <td>{d.updated_at}</td>
              <td>
                <Link
                  to={`editdata/${d.id}`}
                  className="btn btn-sm btn-success"
                >
                  Update
                </Link>
                <button
                  onClick={(e) => handlerDeleteData(d.id)}
                  className="btn btn-sm ms-1 btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  function handlerDeleteData(id) {
    const conf = window.confirm("Apakah anda ingin mendelete data ini");
    if (conf) {
      api
        .deleteData(id)
        .then((res) => {
          alert("Data berhasil di hapus");
          RedirectTo("/");
        })
        .catch((error) => console.log(error));
    }
  }
}

export default App;
