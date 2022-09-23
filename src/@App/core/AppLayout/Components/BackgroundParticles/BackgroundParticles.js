import React from "react";
import Particles from "react-tsparticles";
import ParticelsConfig from "@App/Utils/ParticlesConfig";

const BackgroundParticles = () => {
  return (
    <>
      <Particles params={ParticelsConfig} className="content-particles" />;
    </>
  );
};

export default BackgroundParticles;
