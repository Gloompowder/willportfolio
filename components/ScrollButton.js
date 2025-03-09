// ScrollButton.js

import React, { useState, useEffect } from 'react';
import styles from '../styles/BottomButtons.module.css';
import { usePathname } from 'next/navigation';

const ScrollButton = (props) => {
    const nightMode = props.isNightMode;
    const path = usePathname();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;
      const distanceToBottom = Math.max(bodyHeight - (scrollY + windowHeight), 0);

      // Show the button only when user is within a certain distance from the bottom
      setShowButton(distanceToBottom < 1500); // Adjust 300 based on your preference
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const notFoundRender = () => {
    return path != '/' ? '': 
      !nightMode ? 
        <button
          className={styles['scroll-button']}
          style={{ display: showButton ? 'block' : 'none' }}
          onClick={scrollToTop}
        >
          Scroll Top
        </button>
       : 
        <button
          className={styles['nightMode-scroll-button']}
          style={{ display: showButton ? 'block' : 'none' }}
          onClick={scrollToTop}
        >
          Scroll Top
        </button>
    ;
  };
  

  return (
    notFoundRender()
  );
};

export default ScrollButton;
