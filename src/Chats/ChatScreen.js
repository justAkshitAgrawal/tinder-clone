import React, { useState } from "react";
import { Avatar } from "@mui/material";

import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      name: "Akshit",
      image: "https://i.ibb.co/6nQpj9r/photo1635585110-1.jpg",
      message: "Welcome to my version of Tinder",
    },
    {
      name: "Akshit",
      image: "https://i.ibb.co/6nQpj9r/photo1635585110-1.jpg",
      message: "Yeah it's me",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__title">YOU MATCHED WITH ME TODAY</p>
      {messages.map((message) => {
        return message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__avatar"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textOwn">{message.message}</p>
          </div>
        );
      })}

      <div className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message..."
          type="text"
        ></input>
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </div>
    </div>
  );
}

export default ChatScreen;
