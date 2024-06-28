import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Particle() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  const particlesLoaded = async (container) => {};

  return (
    <Particles
      className="particles_container absolute top-0 left-0 w-full h-screen overflow-y-hidden"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#272b33",
          },
        },
        style: {
          position: "absolute",
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: false,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 36.54347455356053,
              line_linked: {
                opacity: 0.008226254915187319,
              },
            },
            bubble: {
              distance: 36.54347455356053,
              size: 16.241544246026905,
              duration: 2.077922077922078,
              opacity: 0.991008991008991,
              speed: 3,
            },
            repulse: {
              distance: 200,
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
        particles: {
          number: {
            value: 10,
            density: {
              enable: true,
              value_area: 790.90129,
            },
          },
          color: {
            value: "#05c07b",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#41af61",
            },
            polygon: {
              nb_sides: 12,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.749690259550659,
            random: true,
            anim: {
              enable: true,
              speed: 0.3196803196803197,
              opacity_min: 0.23976023976023977,
              sync: false,
            },
          },
          size: {
            value: 60.1279522824571,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 252.52724532232722,
            color: "#d8deed",
            opacity: 0.33933348590187723,
            width: 1.736124811591,
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            random: false,
            straight: true,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
