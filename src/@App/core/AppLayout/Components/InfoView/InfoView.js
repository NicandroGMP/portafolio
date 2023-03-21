import React from "react";
const InfoView = () => {
  return (
    <div className="card-content">
      <div className="content_profile_image">
        <img width="100" src={"/assets/images/profile.jpg"} alt="profile"></img>
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
      <p className="text_aboutme_movile">
        Freelancer de nacionalidad mexicana. Con experiencia en desarrollo web,
        apasionado de la programacion, constantemente adaptándome a las nuevas
        tecnologías que abarcan el mundo del desarrollo web. Mi meta es ser un
        programador fullStack.
      </p>
    </div>
  );
};

export default InfoView;
