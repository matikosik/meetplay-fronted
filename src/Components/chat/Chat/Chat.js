import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import TextContainer from "../TextContainer/TextContainer";
import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";

import "./Chat.css";
import ItemBar from "../../itemBar/itemBar";

let socket;

const Chat = ({ location }) => {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [receiver, setReceiver] = useState("");
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [receiverData, setReceiverData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const ENDPOINT = "18.209.105.43:3000";

  useEffect(() => {
    const { room, token, receiver } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setToken(token);
    setRoom(room);
    setReceiver(receiver);
    socket.emit("join", { room, token, receiver }, (error) => {
      if (error) {
        window.location.reload(false);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  useEffect(() => {
    socket.emit("user", token);
    socket.emit("getReceiverData", receiver);
    socket.on("userData", (user) => {
      setUser(user);
      setName(user.username);
    });

    socket.on("receiverData", (user) => {
      receiverData.push(user);
      setLoading(false);
    });
    
  }, [token, receiver]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    } 
  };

  function showRecieverUsername() {
    return <InfoBar room={receiver} receiver={receiverData[0][0].username}/>
  };

  return (
    <div className="bodyM">
      <div className="cardDivM">
        <div className="">
          <div className="container">
          {!isLoading ? (showRecieverUsername()) : (<InfoBar room={receiver} receiver="" />)}
            <Messages messages={messages} name={name} />
            <Input
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
            />
          </div>
          <TextContainer users={users} />
        </div>
      </div>
      <ItemBar />
    </div>
  );
};

export default Chat;
