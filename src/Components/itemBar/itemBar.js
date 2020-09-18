import React from "react";
import { useHistory } from "react-router-dom";

import logo from "../icons/principalLogo.png";
import matchBtn from "../icons/match.png";
import messageBtn from "../icons/botonmensaje.png";
import editProfileBtn from "../icons/botoneditarperfil.png";
import preferencesBtn from "../icons/botonpreferencias.png";
import vinculateBtn from "../icons/botonvincular.png";

function ItemBar() {
  const history = useHistory();

  const gotoMatch = () => {
    history.push("/match");
  };

  const gotoChat = () => {
    history.push("/chat");
  };

  const gotoEditProfile = () => {
    history.push("/editprofile");
  };

  const gotoPreferences = () => {
    history.push("/preferences");
  };

  const gotoVinculateAccounts = () => {
    history.push("/vinculateaccounts");
  };

  return (
    <div className="itemBarM">
      <img src={logo} className="topLogoM" alt="" />
      <hr className="dividersM"></hr>
      <div className="buttonsDivM">
        <div className="itemBarButton1M">
          <button className="itemBarButton2M" onClick={gotoMatch}>
            <img src={matchBtn} className="matchBtnM" alt="" />
            <p className="buttonTxtM">Match</p>
            <hr className="dividersButtonM"></hr>
          </button>
        </div>

        <div className="itemBarButton3M">
          <button className="itemBarButton2M" onClick={gotoChat}>
            <img src={messageBtn} className="messageBtnM" alt="" />
            <p className="buttonTxt1M">Mensajes</p>
            <hr className="dividersButton1M"></hr>
          </button>
        </div>
        <div className="itemBarButton3M">
          <button className="itemBarButton2M" onClick={gotoEditProfile}>
            <img src={editProfileBtn} className="editProfileBtnM" alt="" />
            <p className="buttonTxt2M">Editar perfil</p>
            <hr className="dividersButton2M"></hr>
          </button>
        </div>
        <div className="itemBarButton3M">
          <button className="itemBarButton2M" onClick={gotoPreferences}>
            <img src={preferencesBtn} className="preferencesBtnM" alt="" />
            <p className="buttonTxt3M">Preferencias</p>
            <hr className="dividersButton3M"></hr>
          </button>
        </div>
        <div className="itemBarButton3M">
          <button className="itemBarButton2M" onClick={gotoVinculateAccounts}>
            <img src={vinculateBtn} className="vinculateBtnM" alt="" />
            <p className="buttonTxt4M">Vincular Cuentas</p>
            <hr className="dividersButton4M"></hr>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemBar;
