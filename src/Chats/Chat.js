import React from "react";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

import "./Chat.css";

function Chat({ name, message, profilePic, timestamp }) {
  return (
    <Link to={`/chats/${name}`}>
      <div className="chat">
        <Avatar
          className="chat__image"
          alt={name}
          src={profilePic}
          sx={{ width: 56, height: 56 }}
        />
        <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat__timestamp">{timestamp}</p>
      </div>
    </Link>
  );
}

export default Chat;
