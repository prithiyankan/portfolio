import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

const sampleProjects = [
  {
    title: 'Student Attendance App',
    description: 'React app to manage class attendance with dashboard and analytics.',
    tech: ['React', 'CSS'],
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Modern personal portfolio built with React and Framer Motion.',
    tech: ['React', 'Framer Motion'],
    link: '#',
  },
];

const Projects = () => (
  <motion.div 
    className="projects-container" 
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: true }}
  >
    <h2>Projects</h2>
    <div className="projects-list">
      {sampleProjects.map(({ title, description, tech, link }) => (
        <motion.div 
          className="project-card" 
          key={title} 
          whileHover={{ scale: 1.03, rotate: 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h3>{title}</h3>
          <p>{description}</p>
          <span>{tech.join(', ')}</span>
          {link && <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>}
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Projects;
