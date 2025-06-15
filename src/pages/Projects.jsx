import React, { useEffect } from 'react';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const projects = [
  {
    title: 'MSN Fake Store',
    description: 'Developed a full-stack e-commerce site with React, Node.js, Express, and MongoDB, supporting authentication, cart, and orders.',
    link: 'https://msnfakestore.onrender.com/',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects.',
    link: 'https://msnportfolio.onrender.com/',
  },
  {
    title: 'API Fetching (Forntend)',
    description: 'Frontend that fetches product data for MSN Fake Store using APIs.',
    link: 'https://msnfakestorereact.onrender.com/',
  },
  {
    title: 'Customer Churn Prediction',
    description: 'Built a machine learning model to predict customer churn using Random Forest and Logistic Regression.',
    link: 'https://github.com/msnanda229/customer-churn-prediction',
  },
  {
    title: 'Iris Flower Classification',
    description: 'Used Random Forest to classify Iris flowers based on petal and sepal measurements.',
    link: 'https://github.com/msnanda229/iris_flower',
  },
  {
    title: 'MSN Fake Store API',
    description: 'Backend API for the MSN Fake Store providing product, user, and order endpoints.',
    link: 'https://apimsnfakestore-backend.onrender.com/api/msnfakestore',
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out' });
  }, []);

  const scrollCarousel = (direction) => {
    const container = document.querySelector('.projects-carousel');
    const scrollAmount = 400;
    container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title" data-aos="zoom-in">My Projects</h2>
      <div className="projects-wrapper">
        <button className="arrow-btn left" onClick={() => scrollCarousel('left')}>
          <FiChevronLeft />
        </button>
        <div className="projects-carousel">
          {projects.map((project, index) => (
            <div className="project-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          ))}
        </div>
        <button className="arrow-btn right" onClick={() => scrollCarousel('right')}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Projects;
