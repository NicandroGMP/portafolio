const particlesConfig = {
  particles: {
    number: {
      value: 123,
      density: {
        enable: true,
        value_area: 710.2328774690454,
      },
    },
    color: {
      value: "#e6ff00",
    },
    shape: {
      type: "edge",
      stroke: {
        width: 1,
        color: "#e6ff00",
      },
      polygon: {
        nb_sides: 4,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.8997522076405273,
      random: true,
      anim: {
        enable: true,
        speed: 0.142946703372556,
        opacity_min: 0.162415442460269,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 10,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 160.3412060865523,
      color: "#e6ff00",
      opacity: 0.04810236182596568,
      width: 5.932624625202434,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 267.9854800594439,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 235.50239156739008,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: false,
};
export default particlesConfig;
