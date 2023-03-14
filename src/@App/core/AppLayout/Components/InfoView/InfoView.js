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
      <h4 className="profesion">Programador Jr</h4>
      <div className="content_downloader">
        <a href="/assets/pdf/CV2023.pdf" download="CV2023.pdf">
          <button type="button" className="button__downloader">
            Descargar CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default InfoView;
