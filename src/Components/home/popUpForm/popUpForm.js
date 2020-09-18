import React, { useState } from "react";
import Modal from "react-responsive-modal";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./popUpForm.css";
import "react-responsive-modal/styles.css";

function PopUpForm() {
  const history = useHistory();

  const [open, isOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onOpenModal = () => {
    isOpen(true);
  };

  const onCloseModal = () => {
    isOpen(false);
  };

  const logIn = () => {
    axios
      .post("http://18.209.105.43:3000/api/login", {
        email: email,
        password: password,
      })
      .then(
        (response) => {
          if (response.status === 200) {
            localStorage.setItem('token', response.data);
            history.push("/match");
          }
          console.log(response);
        },
        (error) => {  
          console.log(error.response.data);
          setError(error.response.data);
        }
      );
  };

  return (
    <div>
      <button onClick={onOpenModal} className="registerLoginButton">
        <h1 className="registerLoginTxt">Inicia Sesión/Registrate</h1>
      </button>

      <Modal open={open} onClose={onCloseModal} center>
        <div className="popUpForm">
          <input
            className="emailForm"
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <input
            className="passForm"
            type="password"
            name="pass"
            placeholder="Contraseña"
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <div className="errorDiv">{error}</div>
          <button onClick={logIn} className="entrarBtn">
            <h1 className="entrarTxt">Entrar</h1>
          </button>
          <h1 className="popUpTxt">¿Olvidaste tu contraseña?</h1>
          <h1 className="popUpTxt1">
            ¿No tienes una cuenta?{" "}
            <a href="/register" className="registerTxt">
              Registrate
            </a>
          </h1>
        </div>
      </Modal>
    </div>
  );
}

export default PopUpForm;
