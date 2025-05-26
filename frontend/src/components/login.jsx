import React, { useState } from "react";// Imagen
import logo from "../assetss/img/reack.png";
import "../assetss/css/login.css";// CSS
import { Apiurl } from "../services/apirest";// Servicios
import axios from "axios";// Librerías
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    usuario: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const manejadorSubmit = (e) => {
    e.preventDefault();
  };

  const manejadorChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const manejadorBoton = () => {
    let url = Apiurl + "login";
    axios
      .post(url, form)
      .then((response) => {
        if (response.data.status) {
          localStorage.setItem("token", response.data.body);
          navigate("/dashboard");
        } else {
          setError(true);
          setErrorMsg(response.data.body);
        }
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setErrorMsg("Error en la petición al servidor");
      });
  };

  return (
    <React.Fragment>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img src={logo} id="icon" alt="User Icon" />
          </div>
          <form onSubmit={manejadorSubmit}>
            <input
              type="text"
              className="fadeIn second"
              name="usuario"
              placeholder="Usuario"
              onChange={manejadorChange}
            />
            <input
              type="password"
              className="fadeIn third"
              name="password"
              placeholder="Password"
              onChange={manejadorChange}
            />
            <input
              type="submit"
              className="fadeIn fourth"
              value="Log In"
              onClick={manejadorBoton}
            />
          </form>

          {error && (
            <div className="alert alert-danger" role="alert">
              {errorMsg}
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
