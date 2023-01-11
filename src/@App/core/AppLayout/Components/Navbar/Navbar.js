import React, { useRef } from "react";

import Logo from "../../../../../img/logo.svg";
import { useNavigate, Link } from "react-router-dom";

const Navbar = ({ onClick }) => {
  return (
    <div className="navbar">
      <div className="content_navbar">
        <img className="logo" src={Logo} alt="logo" />
        <span className="vector1"></span>
        <span className="vector2"></span>
      </div>
    </div>
  );
};

export default Navbar;
