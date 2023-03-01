import React, { useState } from "react";
import logfacebook from "../../../img/facebook-amarillo.svg";
import logtwitter from "../../../img/logotipo-de-instagram-amarillo.svg";
import loginstagram from "../../../img/twitter-icon-amarillo.svg";
const ContactMovile = () => {
  return (
    <>
      <div className="contactme">
        <div className="contactemail">
          <a href="mailto:nicandrogama@gmail.com">nicandrogama@gmail.com</a>
          <div className="social_list" style={{ marginTop: "10px" }}>
            <i className="fa fas-circle icons_info_view">
              <img src={logfacebook} alt="log-facebook"></img>
            </i>
            <i className="fa fas-circle icons_info_view">
              <img src={logtwitter} alt="log-facebook"></img>
            </i>
            <i className="fa fas-circle icons_info_view">
              <img src={loginstagram} alt="log-facebook"></img>
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMovile;
