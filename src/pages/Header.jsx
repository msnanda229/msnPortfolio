import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const handleScroll = () => {
      let current = '';
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (window.scrollY >= top - 100 && window.scrollY < top + height - 100) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contactme', label: 'Contact' }
  ];

  return (
    <header className="header-container">
      <h1 className="site-title">MSN PORTFOLIO</h1>

      {/* Menu Toggle Button */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? '✖' : '☰'}
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navItems.map(({ id, label }) => (
          <li key={id} onClick={() => setMenuOpen(false)}>
            <a href={`#${id}`} className={activeSection === id ? 'active' : ''}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
