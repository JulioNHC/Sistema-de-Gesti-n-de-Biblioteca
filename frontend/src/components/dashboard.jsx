import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Heder from "../template/header";
import { Apiurl } from "../services/apirest";
import 'bootstrap-icons/font/bootstrap-icons.css';

import axios from "axios";

const Dashboard = () => {
  const [libros, setLibros] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const response = await axios.get(Apiurl + "libros");
        setLibros(response.data.body);
      } catch (error) {
        console.error("Error al obtener libros:", error);
      }
    };

    fetchLibros();
  }, []);

  const onClicklibros = (id) => {
    navigate("/editar/" + id);
  };

  return (
        <React.Fragment>
      <Heder />
      <div className="container">
        <br /><br />
        <div className="" style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
          <button className="btn btn-primary" onClick={() => navigate('/nuevo')} style={{ marginBottom: "10px" }}>
            <i className="bi bi-plus-circle me-2"></i> Agregar
          </button>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Género</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {libros.map((libro, index) => (
              <tr key={index} onClick={() => onClicklibros(libro.id)}>
                <td>{libro.id}</td>
                <td>{libro.titulo}</td>
                <td>{libro.genero}</td>
                <td>{libro.cantidad_libro}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );              
}
 

export default Dashboard;
