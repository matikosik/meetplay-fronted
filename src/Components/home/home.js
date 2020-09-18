import React from "react";

import "./home.css";
import PopUpForm from "./popUpForm/popUpForm";

import logo from "../icons/principalLogo.png";
import matchBtn from "../icons/match.png";
import messageBtn from "../icons/botonmensaje.png";
import editProfileBtn from "../icons/botoneditarperfil.png";
import preferencesBtn from "../icons/botonpreferencias.png";
import vinculateBtn from "../icons/botonvincular.png";

function index() {
  return (
    <div className="body">
      <div className="itemBarBlur">
        <div className="buttons">
          <div>
            <img src={matchBtn} className="matchBtn" alt="" />
            <h1 className="matchTxt">Match</h1>
            <hr className="dividers"></hr>
          </div>

          <div>
            <img src={messageBtn} className="messageBtn" alt="" />
            <h1 className="messageTxt">Mensajes</h1>
            <hr className="dividers"></hr>
          </div>

          <div>
            <img src={editProfileBtn} className="editProfileBtn" alt="" />
            <h1 className="editProfileTxt">Editar perfil</h1>
            <hr className="dividers"></hr>
          </div>

          <div>
            <img src={preferencesBtn} className="preferencesBtn" alt="" />
            <h1 className="preferencesTxt">Preferencias</h1>
            <hr className="dividers"></hr>
          </div>

          <div>
            <img src={vinculateBtn} className="vinculateBtn" alt="" />
            <h1 className="vinculateTxt">Vincular cuentas</h1>
          </div>
        </div>
      </div>

      <div className="itemBar">
        <img src={logo} className="topLogoMain" alt="" />
        <hr className="dividerYellow"></hr>
      </div>

      <div className="meetplayDescription">
        <img src={logo} className="logoDescription" alt="" />
        <div className="descriptionTxt">
          <h1 className="descriptionTxt1">¿Qué es Meet&Play?</h1>
          <h1 className="descriptionTxt2">
            Meet&Play es una plataforma centrada en la comunicación entre la
            comunidad de jugadores de videojuegos de todo tipo, nuestro único
            objetivo es que los jugadores puedan relacionarse entre ellos, de
            una manera distinta a la del matchmaking de los videojuegos, para
            así poder hacer una mejor experiencia de juego, en el que puedas
            saber su habilidad, nacionalidad, edad, juegos, etc. Antes de haber
            jugado o conocido al mismo. Además, Meet&Play tiene una función de
            valorar a las personas con las que has estado conversando y/o
            jugando, haciendo que cada persona tenga un nivel de estrellas de
            valoraciones.
          </h1>
          <h1 className="descriptionTxt3">¿Qué esperas para usar Meet&Play?</h1>
          <h1 className="descriptionTxtYellow">
            Regístrate o Inicia Sesión en el botón de la esquina superior
            derecha
          </h1>
        </div>
      </div>
      <div className="registerLoginButton">
        <PopUpForm />
      </div>
    </div>
  );
}

export default index;
