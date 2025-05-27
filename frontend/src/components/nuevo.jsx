import React, { useState } from "react";
import axios from 'axios';
import "../assetss/css/editar.css";
import { Apiurl } from '../services/apirest';
import Heder from '../template/header';
import { useNavigate } from "react-router-dom";


const LibroApregar = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    id: "",
    titulo: "",
    genero: "",
    anio_publicacion: "",
    cantidad_libro: "",
    //token: localStorage.getItem("token")
  });

  const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
  };

  const Guardar = () => {
  if (// Verifica si algún campo está vacío
    !form.titulo ||!form.anio_publicacion ||!form.genero ||!form.cantidad_libro 
  ) {
    alert("Por favor, completa todos los campos antes de guardar.");
    return; // Detiene la ejecución si algún campo está vacío
  }

  // Si todos los campos están completos, realiza la solicitud
  let url = Apiurl + "libros";
  
  axios.post(url, form)
    .then((response) => {
      console.log(response);
      navigate("/dashboard");
      alert("Libro guardado correctamente.");
    })
    .catch((error) => {
      console.error(error);
      alert("Hubo un error al guardar el libro.");
    });
};


  return (
    <React.Fragment>
      <Heder></Heder>
      <div className="container contact-form">
        <form method="post">
            <h3>Libro Nuevo</h3>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label  style={{ color: "gray", marginBottom: "5px", display: "block"  }}>Titulo:</label>
                        <input type="text" name="titulo" className="form-control" placeholder="Titulo"  onChange={handleChange} required/>
                    </div>
                    <div className="form-group">
                      <label style={{ color: "gray", marginBottom: "5px", display: "block"  }}>Genero:</label>
                        <input type="text" name="genero" className="form-control" placeholder="Genero" onChange={handleChange} required/>
                    </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                      <label style={{ color: "gray", marginBottom: "5px", display: "block"  }}>Publicacion:</label>
                      <input type="date" name="anio_publicacion" className="form-control" placeholder="Año_de_publicacion"  onChange={handleChange} required/>
                  </div>
                  <div className="form-group">
                      <label style={{ color: "gray", paddingTop: "35px", display: "block"  }}>Cantidad:</label>
                      <input type="text" name="cantidad_libro" className="form-control" placeholder="Cantidad"  onChange={handleChange} required/>
                  </div>
                </div>
                <div className="" style={{ display: "flex", paddingTop: "20px",justifyContent: "flex-end", alignItems: "center" }}>
                  <br/>
                    <button type="button" className="btn btn-primary" style={{ marginRight: "10px" }} onClick={Guardar}><i className="bi bi-save me-2"></i>Guardar</button>
                    <a class="btn btn-secondary" href="/dashboard">Salir</a>
                </div>
            </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default LibroApregar ;
