import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} MEDISETTY SHANMUKHA NANDA. All rights reserved.</p>
      <p>
        <a href="https://github.com/msnanda229" target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://www.linkedin.com/in/medisetty-shanmukha-nanda-907798291" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
        <a href="#contactme">Contact</a>
      </p>
    </footer>
  );
};

export default Footer;
