import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./card.css";

import defaultPhoto from "./../../icons/defaultPhoto.png";

function Card(props) {
  const history = useHistory();
  const [games, setGames] = useState([]);
  const [temporalGame, setTemporalGame] = useState("");
  const [languages, setLanguages] = useState([]);
  const [temporallanguages, setTemporalLanguages] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const showUsernameAndAge = (username, age) => {
    if (!username && !age) {
      return (
        <div>
          <p className="txtRedB">Nombre de usuario</p>
          <h1 className="txtRedAgeB">Edad</h1>
        </div>
      );
    } else if (username && !age) {
      return (
        <div>
          <p className="txt1B">{username}</p>
          <h1 className="txtRedAgeB">Edad</h1>
        </div>
      );
    } else if (!username && age) {
      return (
        <div>
          <p className="txtRedB">Nombre de usuario</p>
          <h1 className="txt1AgeB">{age + " años"}</h1>
        </div>
      );
    } else if (username && age) {
      return (
        <div>
          <p className="txt1B">{username}</p>
          <h1 className="txt1AgeB">{age + " años"}</h1>
        </div>
      );
    }
  };

  function addLanguages() {
    setLanguages((languages) => [...languages, temporallanguages]);
  }

  function showLanguages() {
    if (languages.length === 0) {
      return (
        <div className="divToMapB">
          <td className="">No agregaste ningun idioma</td>
        </div>
      );
    } else {
      return (
        <div>
          {languages.map((item) => (
            <div className="divToMapB">
              <td key={item}>{item}</td>
            </div>
          ))}
        </div>
      );
    }
  }

  function addGame() {
    setGames((games) => [...games, temporalGame]);
  }
  function showGames() {
    if (games.length === 0) {
      return (
        <div className="divToMapB">
          <td className="">No agregaste ningun juego</td>
        </div>
      );
    } else {
      return (
        <div>
          {games.map((item) => (
            <div className="divToMapB">
              <td key={item}>{item}</td>
            </div>
          ))}
        </div>
      );
    }
  }

  useEffect(() => {
    setUsername(props.username);
    setAge(props.age);
    setEmail(props.email);
    setPassword(props.password);
  }, [props]);

  const register = () => {
    setUsername(props.username);
    setAge(props.age);
    setEmail(props.email);
    setPassword(props.password);
    axios
      .post("http://18.209.105.43:3000/api/register", {
        username: username,
        email: email,
        password: password,
        age: age,
        games: [
          {
            game: games[0],
          },
        ],
        lenguages: [languages],
      })
      .then(
        (response) => {
          console.log(response);
          if (response.status === 200) {
            localStorage.setItem('token', response.data);
            history.push("/match");
          }
        },
        (error) => {
          console.log(error.response.data);
          setError(error.response.data);
        }
      );
  };

  return (
    <div className="mainCardB">
      <img src={defaultPhoto} className="defultPhotoStyleB" alt="" />
      <div className="nameDivB">
        <p>{showUsernameAndAge(props.username, props.age)}</p>
      </div>
      <div className="ilanguagesDivB">
        <p className="txtB">Idiomas</p>
        <div className="languagesInputDivB">
          <form>
            <input
              className="languagesInputB"
              type="lenguage"
              name="lenguages"
              placeholder="Introducir idioma"
              onChange={(event) => setTemporalLanguages(event.target.value)}
            />
            <button
              type="reset"
              onClick={addLanguages}
              className="languagesButtonB"
            >
              <p className="txtButtonsB">Agregar</p>
            </button>
          </form>
        </div>
        <div className="ilanguagesDivInsideB">{showLanguages()}</div>
      </div>
      <div className="gamesDivB">
        <p className="txtB">Juegos</p>
        <div className="languagesInputDivB">
          <form>
            <input
              className="languagesInputB"
              type="game"
              name="game"
              placeholder="Introducir Juego"
              onChange={(event) => setTemporalGame(event.target.value)}
            />
            <button type="reset" onClick={addGame} className="languagesButtonB">
              <p className="txtButtonsB">Agregar</p>
            </button>
          </form>
        </div>
        <div className="gamesDivInsideB">{showGames()}</div>
      </div>
      <div className="DecripcionDivB">
        <p className="txtB">Decripcion</p>
        <div className="DecripcionDivInsideB"></div>
        <div className="ilanguagesDivInsideB">
          <p>Texto desc</p>
        </div>
      </div>
      <button onClick={register} className="submitButtonB">
        <div className="errorDivB">{error}</div>
        <p className="submitButtonTxtB">Registrate</p>
      </button>
    </div>
  );
}

export default Card;
