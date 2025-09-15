import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';
import adhi from '../assets/adhi.jpeg';

const About = () => (
  <motion.div 
    className="about-container" 
    initial={{ opacity: 0, y: 60 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true }} 
    transition={{ duration: 0.7 }}
  >
    <h2>About Me</h2>
    <p>
      Hi! I'm a recent Computer Science graduate, passionate about building innovative web applications with a focus on clean design and seamless user experience. 
      I enjoy exploring new technologies and thrive in collaborative environments.
    </p>
    <p>
      Interests: UI/UX, Frontend Development, AI<br />
      Career Goal: To grow as a passionate software engineer.
    </p>
    <img src={adhi} alt="Profile" className="about-img" />
  </motion.div>
);

export default About;
