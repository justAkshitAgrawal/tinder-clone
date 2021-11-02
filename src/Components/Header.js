import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      {props.backButton ? (
        <Link to={props.backButton}>
          <IconButton>
            <ArrowBackIosNewIcon fontSize="large" className="header__icon" />
          </IconButton>
        </Link>
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header__logo"
          src="https://i.ibb.co/pyWt3Lw/logo.png"
          alt="Logo"
        />
      </Link>

      <Link to="/chats">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
