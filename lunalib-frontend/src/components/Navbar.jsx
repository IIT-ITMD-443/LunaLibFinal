import React from "react";
import { Link } from "react-router-dom";

import homeIcon from "../assets/home.png";
import mylibraryIcon from "../assets/mylibrary.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/home" className="nav-item">
          <img src={homeIcon} alt="Home" />
          Home
        </Link>

        <Link to="/mylibrary" className="nav-item">
          <img src={mylibraryIcon} alt="Library" />
          My Library
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
