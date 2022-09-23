import React from "react";
import profile from "../../../../../img/profile.png";
import logfacebook from "../../../../../img/facebook-amarillo.svg";
import logtwitter from "../../../../../img/logotipo-de-instagram-amarillo.svg";
import loginstagram from "../../../../../img/twitter-icon-amarillo.svg";
const InfoView = () => {
  return (
    <div className="card-content">
      <div>
        <img width="100" src={profile} alt="profile"></img>
      </div>
      <div className="name-cont">
        <h4>Nicandro Gamaliel Martínez Pérez</h4>
      </div>
      <h4 className="text">Desarrollador Web</h4>
      <div className="social_list">
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
  );
};

export default InfoView;
