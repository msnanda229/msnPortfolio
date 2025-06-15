import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GraduationCap, Target, Heart, BookOpen } from 'lucide-react';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // <== ensures animation triggers on every scroll into view
    });
  }, []);

  const highlights = [
    {
      icon: GraduationCap,
      title: 'Computer Science Student',
      description: 'Pursuing a B.Tech in AI & ML, graduating in 2026 with a strong academic foundation',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on building a successful career in software development',
    },
    {
      icon: Heart,
      title: 'Passionate',
      description: 'Love coding and creating solutions that can make a positive impact',
    },
    {
      icon: BookOpen,
      title: 'Quick Learner',
      description: 'Always eager to learn new technologies and improve my skills',
    },
  ];

  return (
    <div className='all'>
      <h1 data-aos="fade-up">About Me</h1>
      <div className="about-container">
        <h3 className="about-description" data-aos="fade-right">
          I am Medisetty Shanmukha Nanda, currently graduating from Narasaraopeta Engineering College, 
          pursuing a B.Tech in Artificial Intelligence and Machine Learning.

          I am a passionate software developer skilled in Python programming, full-stack web development 
          using the MERN stack (MongoDB, Express, React, Node.js), and artificial intelligence. 
          With a strong foundation in coding and problem-solving, I build efficient, scalable, and innovative applications.

          I enjoy working on both frontend and backend technologies and have hands-on experience 
          creating dynamic web apps, APIs, and intelligent AI-powered solutions. I’m always eager 
          to learn new tools and technologies to keep up with the fast-evolving tech landscape and 
          apply them to solve real-world problems.

          Driven by curiosity and continuous growth, I strive to deliver clean, maintainable code 
          while collaborating effectively within teams. My goal is to contribute to impactful 
          projects that combine software development and AI to create meaningful user experiences.
        </h3>

        <div className="about-icons">
          {highlights.map((item, index) => (
            <div key={index} className="highlight" data-aos="fade-up" data-aos-delay={index * 100}>
              <item.icon size={40} className="highlight-icon" />
              <h5 className="highlight-title">{item.title}</h5>
              <p className="highlight-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
