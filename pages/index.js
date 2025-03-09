import React, { useState, useEffect } from 'react';
import Work from '../components/Work';
import Contact from '../components/Contact';
import TechStack from '../components/TechStack';
import styles from '../styles/Home.module.css';
import About from '../components/About';
import Parallax from '../components/Parallax';
import Spinners from '../components/Spinners.js';

const Index = (props) => {
  const languages = ['Welcome', 'Bienvenido', '歡迎', 'Bienvenue', 'Willkommen', 'Benvenuto', '환영'];

  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const [isIntroVisible, setIsIntroVisible] = useState(false);
  
  useEffect(() => {
    const targetSection = localStorage.getItem('targetSection');

    if (targetSection) {
      const section = document.getElementById(targetSection);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Clear the stored section ID
        localStorage.removeItem('targetSection');
      }
    };

    const intervalId = setInterval(() => {
      setCurrentLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 3000);

    setTimeout(() => {
      setIsIntroVisible(true);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const nightModeHomeRender = () => {
    return props.isNightMode ? 
    <div >
      <Parallax />
      <div className={`${styles['nightMode-intro']} ${isIntroVisible ? styles['nightMode-fade-in'] : ''}`} id='introSection'>
        <h1>{languages[currentLanguageIndex]}</h1>
        <h2>I'm Will!</h2>
        <div>A New York City-based <p className={styles['nightMode-intro-highlight']}>developer</p> and <p className={styles['nightMode-intro-highlight']}>multi-media artist.</p></div>
        <p>Have a vision? I'll bring it to life.</p>
        <div className={styles['nightMode-intro-buttons']}>
        </div>
        <div className={styles['nightMode-scroll-down']}>Keep Scrolling</div>
      </div>
      <About props={props}/>
      <Work id="workSection" props={props} />
      <TechStack props={props} /> 
      <Spinners isNightMode={props.isNightMode}/>
      <Contact id="contactSection" props={props} />
    </div>
    :<div >
    <Parallax />
    <div className={`${styles['intro']} ${isIntroVisible ? styles['fade-in'] : ''}`} id='introSection'>
      <h1>{languages[currentLanguageIndex]}</h1>
      <h2>I'm Will!</h2>
      <div>A New York City-based <p className={styles['intro-highlight']}>developer</p> and <p className={styles['intro-highlight']}>multi-media artist.</p></div>
      <p>Have a vision? I'll bring it to life.</p>
      <div className={styles['intro-buttons']}>
      </div>
      <div className={styles['scroll-down']}>Keep Scrolling</div>
    </div>
    <About props={props}/>
    <Work id="workSection" props={props} />
    <TechStack props={props} /> 
    <Spinners isNightMode={props.isNightMode}/>
    <Contact id="contactSection" props={props} />
  </div>;
  };
  return nightModeHomeRender();
};

export default Index;
