import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideLoader(true);
    }, 3000); // Show for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader-screen ${hideLoader ? 'fade-out' : ''}`}>
      <h1 className="loader-text">MSN PORTFOLIO</h1>
    </div>
  );
};

export default Loader;
