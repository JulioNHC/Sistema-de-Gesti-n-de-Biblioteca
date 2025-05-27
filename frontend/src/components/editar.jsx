import React, { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../assetss/css/editar.css";
import { Apiurl } from '../services/apirest';
import Heder from '../template/header';
import { useNavigate } from "react-router-dom";

const LibroDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    id: "",
    titulo: "",
    genero: "",
    anio_publicacion: "",
    cantidad_libro: "",
    token: localStorage.getItem("token")
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    let url = Apiurl + "libros/" + id;
    axios.get(url)
      .then(response => {
        const libro = response.data.body[0];
        setForm({
          id: libro.id,
          titulo: libro.titulo,
          genero: libro.genero,
          anio_publicacion: libro.anio_publicacion,
          cantidad_libro: libro.cantidad_libro
          //token: localStorage.getItem("token")
        });
      })
      .catch(error => {
        console.error("Error al obtener libro:", error);
      });
  }, [id]);

  
  const Editar = () => {
  // Verifica si algún campo está vacío
  if (
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
      alert("Libro guardado correctamente.");
    })
    .catch((error) => {
      console.error(error);
      alert("Hubo un error al guardar el libro.");
    });
};

const Eliminar = () => {
  let url = Apiurl + "libros";
  axios.delete(url,{data: { id: id } })// Aquí se envía el id en el body
  .then((response) => {
    navigate("/dashboard");
  })
  .catch((error) => {
    console.error("Error al eliminar:", error);
  });
};


  return (
    <React.Fragment>
      <Heder></Heder>
      <div className="container contact-form">
        <form method="post">
            <h3>Datos del Libro</h3>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label style={{ color: "gray", marginBottom: "5px", display: "block"  }}>ID:</label>
                        <input type="text" name="id" className="form-control" placeholder="ID"  value={form.id} readOnly />
                    </div>
                    <div className="form-group">
                        <label  style={{ color: "gray", marginBottom: "5px", display: "block"  }}>Titulo:</label>
                        <input type="text" name="titulo" className="form-control" placeholder="Titulo" value={form.titulo} onChange={handleChange} required/>
                    </div>
                    <div className="form-group">
                      <label style={{ color: "gray", marginBottom: "5px", display: "block"  }}>Genero:</label>
                        <input type="text" name="genero" className="form-control" placeholder="Genero" value={form.genero} onChange={handleChange} required/>
                    </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                      <label style={{ color: "gray", marginBottom: "5px", display: "block"  }}>Publicacion:</label>
                      <input type="date" name="anio_publicacion" className="form-control" placeholder="Año_de_publicacion" value={form.anio_publicacion?.slice(0, 10)} onChange={handleChange} required/>
                  </div>
                  <div className="form-group">
                      <label style={{ color: "gray", marginBottom: "5px", display: "block"  }}>Cantidad:</label>
                      <input type="text" name="cantidad_libro" className="form-control" placeholder="Cantidad" value={form.cantidad_libro} onChange={handleChange} required/>
                  </div>
                </div>
                <div className="" style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                  <br/>
                    <button type="button" className="btn btn-primary" style={{ marginRight: "10px" }} onClick={Editar}><i className="bi bi-pencil me-2"></i>Editar</button>
                    <button type="button" className="btn btn-danger" style={{ marginRight: "10px" }} onClick={Eliminar}><i className="bi bi-trash me-2"></i>Eliminar</button>
                    <a class="btn btn-secondary" href="/dashboard">Salir</a>
                </div>
            </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default LibroDetalle;
