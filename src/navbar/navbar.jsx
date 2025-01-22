import React, { useState, useEffect } from 'react';
import 'boxicons/css/boxicons.min.css'; // Import Boxicons
import './navbar.css'; // Link to your CSS

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Set the initial theme when the component mounts
  useEffect(() => {
    // Check if the user has a preferred theme saved in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkTheme(savedTheme === 'dark');
      document.body.classList.add(savedTheme);
      document.body.classList.remove(savedTheme === 'dark' ? 'light' : 'dark');
    } else {
      document.body.classList.add('light'); // Default to light theme
    }
  }, []);

  // Toggle the menu state
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = !isDarkTheme ? 'dark' : 'light';
    setIsDarkTheme(!isDarkTheme);
    
    // Change the class on the body to switch between light and dark
    document.body.classList.add(newTheme);
    document.body.classList.remove(newTheme === 'dark' ? 'light' : 'dark');
    
    // Save the theme in localStorage
    localStorage.setItem('theme', newTheme);

    console.log(`Theme changed to: ${newTheme}`);
  };

  return (
    <div className="navbar">
      <div className="header">
        <a href="javascript:void(0)" className="logo">My Portfolio</a>
        <i 
          className="bx bx-menu" 
          onClick={toggleMenu}
        ></i> {/* Responsive menu icon */}
        <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setMenuActive(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuActive(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setMenuActive(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setMenuActive(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setMenuActive(false)}>Contact</a></li>
        </ul>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
