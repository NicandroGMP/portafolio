import React from "react";

import Logo from "../../../../../img/logo.svg";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <img className="logo" src={Logo} alt="logo" />
        <span className="vector1"></span>
        <span className="vector2"></span>
      </div>
    );
  }
}

export default Navbar;
