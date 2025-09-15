import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => (
  <motion.div 
    className="contact-container" 
    initial={{ opacity: 0, y: 40 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true }} 
    transition={{ duration: 0.7 }}
  >
    <h2>Contact</h2>
    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Message" required />
      <button type="submit">Send</button>
    </form>
    <div className="contact-links">
      <a href="mailto:skaditiya2304@gmail.comru" aria-label="Email"><FaEnvelope /></a>
      <a href="https://www.linkedin.com/in/adhi-prithiyankan-1400012a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
      <a href="https://github.com/prithiyankan" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
    </div>
  </motion.div>
);

export default Contact;
