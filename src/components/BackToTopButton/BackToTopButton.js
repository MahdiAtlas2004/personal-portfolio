import React, { useState, useEffect } from 'react';
import './BackToTopButton.css'; // You can style your button in this file
import { ArrowUp } from "react-bootstrap-icons";


const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to handle scrolling
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={isVisible ? 'back-to-top-button show' : 'back-to-top-button'}>
      <button onClick={scrollToTop}><ArrowUp size={20}/></button>
    </div>
  );
};

export default BackToTopButton;
