import React, { useEffect } from 'react';
import './Skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPython, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);


  AOS.init({
  duration: 1000,
  once: false,
  mirror: true,
});


  const skills = [
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaJsSquare />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <FaDatabase />, name: 'MongoDB' },
    { icon: <FaGitAlt />, name: 'GitHub' },
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3Alt />, name: 'CSS3' },
  ];

  return (
    <div className="skills-section" data-aos="fade-up">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card" data-aos="zoom-in">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
