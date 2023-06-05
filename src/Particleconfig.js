const ParticleConfig  ={
    particles: {
      number: {
        value: 1000
      },
      shape: {
        type: "circle"
      },
      size: {
        value: 2,
        random: true
      },
      line_linked: {
        enable: false
      },
      move: {
        enable: true,
        speed: 10,
        direction: "bottom",
        straight: true
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false
        }
      },
      modes: {
        push: {
          particles_nb: 2
        }
      }
    }
}

export default p