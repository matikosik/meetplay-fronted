import React, { useState } from "react";

import "./register.css";

import logo from "../icons/principalLogo.png";

import Card from "./card/card";

function Register() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(localStorage.getItem("token"));
  return (
    <div className="body">
      <div className="upperLogo">
        <img src={logo} className="topLogoAA" alt="" />
      </div>
      <div className="inputsDiv1">
        <input
          className="leftInput"
          type="username"
          name="username"
          placeholder="Nombre de usuario"
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <input
          className="leftInput"
          type="age"
          name="age"
          placeholder="Edad"
          onChange={(event) => setAge(event.target.value)}
        />
        <br />
        <input
          className="leftInput"
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <input
          className="leftInput"
          type="password"
          name="pass"
          placeholder="Contraseña"
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <input
          className="leftInput"
          type="password"
          name="rptPassword"
          placeholder="Repetir contraseña"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div className="inputsDiv2">
        <Card username={username} age={age} password={password} email={email} />
      </div>
    </div>
  );
}

export default Register;
