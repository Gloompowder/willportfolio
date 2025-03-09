// MyApp.js
import React, { useState, useEffect } from 'react';
import WindowSizeLogger from '../components/WindowSizeLogger';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import BottomButtons from '@/components/BottomButtons';
import '../styles/global.css';
import Modal from '../components/Modal';
import { useRouter } from 'next/router';
import { LoadingProvider } from '../components/LoadingContext';  // Assuming you have LoadingProvider in LoadingContext.js
import Loading from '../components/Loading';



function MyApp({ Component, pageProps }) {
  // window size
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isLoading, setIsLoading] = useState(true);

  const handleResize = (newSize) => {
    setWindowSize(newSize);
  };

  // day/nightmode
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode((prevMode) => !prevMode);
  };

  const [isModal, setIsModal] = useState(false);

  const closeModal = () => {setIsModal(false)};

  const toggleModal = () => {
    setIsModal((prevMode) => !prevMode);
  };

  const noModal = () => {
    setIsModal(false)
  }

  const router = useRouter();

  const scrollToSection = (sectionId) => {
    // Store the section ID in localStorage
    localStorage.setItem('sectionName', sectionId);
  
    // Check if the current path is the home path '/'
    if (router.pathname === '/') {
      // Scroll to the section immediately if already on the home page
      scroll();
    } else {
      // Navigate to the home page, and scroll to the section after the page transition
      window.location.assign('/').then(() => {
        scroll();
      });
    }
  
    // Function to scroll to the stored section
    function scroll() {
      const storedSectionName = localStorage.getItem('sectionName');
      const section = document.getElementById(storedSectionName);
  
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        localStorage.removeItem('sectionName');
      }
    }
  };
  

  const handleScrollAndToggle = (sectionName) =>{
    props.toggleModal.bind(scrollToSection(sectionName))
};

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  if (isLoading) {
    return <Loading/>;
  }

  return (
    <LoadingProvider>
      <WindowSizeLogger onResize={handleResize} noModal={noModal} closeModal={closeModal}>
        {isModal && <Modal toggleModal={toggleModal} isModal={isModal} windowSize={windowSize} handleScrollAndToggle={handleScrollAndToggle}noModal={noModal} scrollToSection={scrollToSection} isNightMode={isNightMode}/>}
        <BottomButtons windowSize={windowSize} isNightMode={isNightMode} toggleNightMode={toggleNightMode} />
        <NavBar windowSize={windowSize} isNightMode={isNightMode} toggleModal={toggleModal} scrollToSection={scrollToSection}/>
        <Component windowSize={windowSize} isNightMode={isNightMode} {...pageProps} />
        <Footer windowSize={windowSize} isNightMode={isNightMode} scrollToSection={scrollToSection}/>
      </WindowSizeLogger >
    </LoadingProvider>
  );
}

export default MyApp;
