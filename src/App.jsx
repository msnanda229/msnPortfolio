import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from './pages/Hero';
import Header from './pages/Header';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contactme from './pages/Contactme';
import Loader from './components/Loader';
import Footer from './pages/Footer';


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div>
          <Header />
          <main>
            <section id="hero"><Hero /></section>
            <section id="about"><About /></section>
            <section id="skills"><Skills /></section>
            <section id="projects"><Projects /></section>
            <section id="contactme"><Contactme /></section>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
