'use client'
import React from 'react';
import styles from '../styles/NavBar.module.css';
import { useRouter } from 'next/router';

// import Logo from '../assets/williamlinorange.svg';
// import BLogo from '../assets/williamlinblack.svg';


const NightModeNavBar = (props) => {
  const router = useRouter();

  const windowWidth = props.windowSize.width;

  // conditional rendering NightModeNavBar
  const isMobile = () => {
    return windowWidth > 768 ? (
      <div className={styles['NightModeNavBar-container']}>
        <div className={styles['NightModeNavBar-home-container']}>
          <h1 className={styles['NightModeNavBar-home']} onClick={() => props.scrollToSection('introSection')}>william lin</h1>
        </div>
        <div className={styles['NightModeNavBar-subgroup']}>
          <button onClick={() => props.scrollToSection('aboutSection')}>
            about
          </button>
          <button             onClick={() => props.scrollToSection('workSection')}>
            work
          </button>
          <button             onClick={() => props.scrollToSection('contactSection')}>
            contact
          </button>
        </div>
      </div>
    ) : (
      <div className={styles['mobile-NightModeNavBar-container']}>
        <div className={styles['mobile-NightModeNavBar-home-container']}>
          <h1 className={styles['NightModeNavBar-home']} onClick={() => props.scrollToSection('introSection')}>william lin</h1>
        </div>
        <div className={styles['mobile-NightModeNavBar-button-container']}>
          <button className={styles['NightModeNavBar-button']} onClick={props.toggleModal} >=</button>
        </div>
      </div>
    );
  };

  return (
    // Your NightModeNavBar JSX
    isMobile()
  );
};

export default NightModeNavBar;

