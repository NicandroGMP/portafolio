import React from "react";
import { BackgroundParticles, InfoView } from "@App/core/AppLayout/Components";
const About = () => {
  return (
    <>
      <div className="content-about" id="section-0">
        <BackgroundParticles />
        <InfoView />
        <div className="card-about">
          <h1 className="title">SOBRE MÍ</h1>
          <p className="text_aboutme">
            Freelancer de nacionalidad mexicana. Con experiencia en desarrollo
            web, apasiondo de la programacion, constantemente adaptándome a las
            nuevas tecnologías que abarcan el mundo del desarrollo web. Mi meta
            es ser un programador fullStack.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
