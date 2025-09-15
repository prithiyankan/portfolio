import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../styles/DarkModeToggle.css';

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button className="dark-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default DarkModeToggle;
