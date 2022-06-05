import React from "react";
import Particles from "react-tsparticles";

function Particle({lightMode}) {
  const paramConfig = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false,
        },
      },
      color: {
        value: "#ffffff",
      },
      opacity: {
        value: 0.1,
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        enable: true,
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out",
      },
    },
  };

  const paramConfigLight = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false,
        },
      },
      color: {
        value: "#000000",
      },
      opacity: {
        value: 0.1,
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        enable: true,
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out",
      },
    },
  };
  return (
    <Particles
      className="mi-home-particle"
      options={lightMode ? paramConfigLight : paramConfig}
    />
  );
}

export default Particle;
