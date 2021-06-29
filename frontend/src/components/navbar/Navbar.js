import React from "react";
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import Action from "./action/Action.js";
import { Link } from "react-router-dom";
const user = true;

const Navbar = () => {
  return (
    <div className="navbar">
      {/*<img
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt="logo"
        className="app__headerImage"
      />*/}
      <Link className="logo" to="/">
        LCPP
      </Link>
      {/* <label>
        <SearchIcon></SearchIcon>
      </label>*/}
      <input type="text" placeholder="Search"></input>

      <Action user={user}></Action>
    </div>
  );
};

export default Navbar;