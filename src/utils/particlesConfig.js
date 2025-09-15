const particlesConfig = {
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'grab' },
      resize: true,
    },
    modes: {
      grab: { distance: 140, links: { opacity: 0.25 } },
    },
  },
  particles: {
    color: { value: '#888' },
    links: {
      color: '#888',
      distance: 120,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    collisions: { enable: false },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: { enable: true, area: 800 },
      value: 55,
    },
    opacity: { value: 0.3 },
    shape: { type: 'circle' },
    size: { random: true, value: 3 },
  },
  detectRetina: true,
};

export default particlesConfig;
