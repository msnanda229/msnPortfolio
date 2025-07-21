import React from 'react';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className="hero" data-aos="fade-up">
      <div className="profile-img" data-aos="zoom-in">
        <img src="/image.jpg" alt="Profile" />
      </div>

      <div className="hero-content" data-aos="fade-up">
        <h1 data-aos="fade-right">MEDISETTY SHANMUKHA NANDA</h1>

        <h3 data-aos="fade-left">
          <TypeAnimation
            sequence={[
              'Python Programmer',
              1500,
              'MERN Full Stack Developer',
              1500,
              'AI Enthusiast',
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h3>

        <p data-aos="fade-up">
          Welcome to my portfolio! I am a passionate Python programmer and MERN full
          stack developer who loves building innovative software and exploring AI
          technologies.
        </p>

        <div className="social-icons" data-aos="zoom-in">
          <a
            href="https://github.com/msnanda229"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/medisetty-shanmukha-nanda-907798291"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="mailto:shanmukhananda100@gmail.com" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>

        <a href="/Medisetty_Shanmukha_Nanda.pdf" download className="download-button" data-aos="fade-up">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
