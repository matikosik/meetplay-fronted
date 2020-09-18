import React, { useEffect, useState } from "react";

import "./card1.css";

import defaultPhoto from "./../../icons/defaultPhoto.png";

function Card(props) {
  const [languages, setLanguages] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    setLanguages(props.languages);
    setGames(props.games);
  }, []);

  return (
    <div className="mainCard">
      <img src={defaultPhoto} className="defultPhotoStyle" alt="" />
      <div className="nameDiv">
        <p className="txtAAA">{props.username}</p>
        <p className="txtAAA">{props.age}</p>
      </div>
      <div className="ilanguagesDiv">
        <p className="txt">Idiomas</p>
        <div className="gamesDivInside">
          {languages.map((item) => (
            <div className="divToMap" key={item}>{item}</div>
          ))}
        </div>
      </div>
      <div className="gamesDiv">
        <p className="txt">Juegos</p>
        <div className="gamesDivInside">
          {games.map((item) => (
            <div className="divToMap" key={item}>{item.game}</div>
          ))}
        </div>
      </div>
      <div className="DecripcionDiv">
        <p className="txt">Decripcion</p>
        <div className="DecripcionDivInside"></div>
        <div className="ilanguagesDivInside">
          <p>Texto desc</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
