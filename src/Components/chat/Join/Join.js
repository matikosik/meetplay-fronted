import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as io from "socket.io-client";

import "./Join.css";
import ItemBar from "../../itemBar/itemBar";

export default function SignIn() {
  const [token, setToken] = useState("");
  const [room, setRoom] = useState("");
  const [roomsFromUser, setRoomsFromUser] = useState([]);
  const [receiver, setReceiver] = useState("");
  const [isLoading, setLoading] = useState(true);

  let socket;
  const ENDPOINT = "18.209.105.43:3000";
  
  useEffect(() => {
    getRooms();
    setToken(localStorage.getItem("token"));
  }, [ENDPOINT, token]);

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("search", receiver);
  }, [receiver]);

  const getRooms = async () => {
    socket = io(ENDPOINT);

    if (token !== "") {
      socket.emit("userRoom", { token });
    }

    socket.on("createRoom", (roomData) => {
      setRoom(roomData);
    });
    socket.on("alreadyInRoom", (roomsUser) => {
      setRoomsFromUser(roomsUser);
      console.log(roomsFromUser);
      setLoading(false);
    });

    socket.emit("search", receiver);
  };

  function mostrarRooms() {
    return (
      <div>
        {roomsFromUser.map((item) => (
          <Link
            onClick={(e) => (!token || !room ? e.preventDefault() : null)}
            to={`/messages?room=${item.room}&token=${token}&receiver=${item.receiver}`}
          >
            <button className="buttonToMap" type="submit">
              {item.receiverUsername.username}
            </button>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="bodyM">
      <div className="cardDivM">
        <div>
          <input
            placeholder="Enviar mensaje a (id)"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setReceiver(event.target.value)}
          />
          <Link
            onClick={(e) => (!token || !room ? e.preventDefault() : null)}
            to={`/messages?room=${room}&token=${token}&receiver=${receiver}`}
          >
            <button className="buttonToMap" type="submit">
              Enviar
            </button>
          </Link>
        </div>
        <div className="rooms">
          {!isLoading ? mostrarRooms() : <h1>Cargando salas</h1>}
        </div>
      </div>
      <ItemBar />
    </div>
  );
}
