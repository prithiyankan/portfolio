import React, { useState, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import { FaBars, FaTimes } from 'react-icons/fa';
import DarkModeToggle from './DarkModeToggle';
import '../styles/Navbar.css';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  // Prevent background scroll on menu open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = id => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`navbar ${theme}`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-container">
        <div className="logo">Adhi Prithiyankan</div>

        {isOpen && <div className="nav-overlay" onClick={() => setIsOpen(false)} />}

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          {links.map(({ label, href }) => (
            <button
              key={href}
              className="nav-link-btn"
              type="button"
              onClick={() => scrollToSection(href)}
            >
              {label}
            </button>
          ))}
          <DarkModeToggle />
        </div>

        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
