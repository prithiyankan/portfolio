import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Particles from 'react-tsparticles';
import particlesConfig from './utils/particlesConfig';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Particles options={particlesConfig} style={{ position: 'fixed', zIndex: 0 }} />
      <div className="app-container">
        <Navbar />
        <main>
          <section id="about"><About /></section>
          <section id="projects"><Projects /></section>
          <section id="skills"><Skills /></section>
          <section id="contact"><Contact /></section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
