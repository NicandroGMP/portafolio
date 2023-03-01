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
          <p className="text">
            here are two spaces between these&nbsp;&nbsp;words.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
