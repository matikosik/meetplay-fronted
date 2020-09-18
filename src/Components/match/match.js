import React, { useState, useEffect } from "react";
import axios from "axios";
import TinderCard from "react-tinder-card";
import * as io from "socket.io-client";
import { useHistory } from "react-router-dom";

import Card from "./card/card";
import ItemBar from "../itemBar/itemBar";

import "./match.css";

let socket;
const ENDPOINT = "18.209.105.43:3000";

function Match() {
  const history = useHistory();
  const [matchs, setMatch] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [lastDirection, setLastDirection] = useState();
  const [token, setToken] = useState("");

  const getMatchs = async () => {
    await axios
      .get("http://18.209.105.43:3000/api/match", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then(
        (response) => {
          setMatch(response.data);
          setLoading(false);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const swiped = async(direction, email) => {
    setLastDirection(direction);
    if (direction === "right" || direction === "down" || direction === "up") {
      socket = io(ENDPOINT);
      socket.emit("match", { email, token });
      await socket.on("roomFromMatch", async (data) => {
        console.log(data)
        history.push("/messages?room="+ data.room + "&token="+ token+ "&receiver=" + data.receiver);
      });
    }
  };

  const outOfFrame = (name, email) => {
  };

  const showMatchs = () => {
    return (
      <div>
        {matchs.map((item) => (
          <TinderCard
            className="swipe"
            key={item.username}
            onSwipe={(dir) => swiped(dir, item.email)}
            onCardLeftScreen={() => outOfFrame(item.username)}
          >
            <Card
              username={item.username}
              age={item.age}
              languages={item.lenguages}
              games={item.games}
            />
          </TinderCard>
        ))}
      </div>
    );
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    getMatchs();
  }, []);

  return (
    <div className="bodyM">
      <div className="cardDivM">
        <div className="cardM">
          {!isLoading ? showMatchs() : <h1></h1>}
          {lastDirection ? (
            <h2 className="infoTextM">You swiped {lastDirection}</h2>
          ) : (
            <h2 className="infoTextM">.</h2>
          )}
        </div>
      </div>
      <ItemBar />
    </div>
  );
}

export default Match;
