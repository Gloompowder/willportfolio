// HorizontalProgressBar.js
import React, { useEffect, useState } from 'react';
import styles from '../styles/HorizontalProgressBar.module.css';

const HorizontalProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollableElement = document.documentElement;
    const totalScrollableWidth = scrollableElement.scrollWidth - scrollableElement.clientWidth;
    const currentScrollPosition = scrollableElement.scrollLeft;

    const percentage = (currentScrollPosition / totalScrollableWidth) * 100;
    setScrollPercentage(percentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className={styles.progressBar} style={{ width: `${scrollPercentage}%` }}></div>;
};

export default HorizontalProgressBar;
