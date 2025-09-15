import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import '../styles/Skills.css';
import jsAnimation from '../assets/animations/js.json';
import reactAnimation from '../assets/animations/react.json';
import githubAnimation from '../assets/animations/github.json';
import communicationAnimation from '../assets/animations/communication.json';

const skills = [
  { label: 'JavaScript', animationData: jsAnimation },
  { label: 'React', animationData: reactAnimation },
  { label: 'GitHub', animationData: githubAnimation },
  { label: 'Communication', animationData: communicationAnimation },
];

const defaultOptions = (animationData) => ({
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
});

const Skills = () => (
  <motion.div 
    className="skills-container" 
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: true }} 
    transition={{ duration: 0.7 }}
  >
    <h2>Skills</h2>
    <div className="skills-list">
      {skills.map(({ label, animationData }) => (
        <motion.div 
          className="skill-item" 
          key={label} 
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Lottie options={defaultOptions(animationData)} height={100} width={100} />
          <span>{label}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Skills;
