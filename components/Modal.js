import { React, useEffect } from 'react'
import styles from '../styles/Modal.module.css';
import Image from 'next/image';
import LinkedIn from '../public/linkedin-svgrepo-com.svg';
import Medium from '../public/medium-icon-svgrepo-com.svg';
import Github from '../public/github-svgrepo-com.svg';
import whiteLinkedIn from '../public/whitelinkedin-svgrepo-com.svg';
import whiteMedium from '../public/whitemedium-icon-svgrepo-com.svg';
import whiteGithub from '../public/whitegithub-svgrepo-com.svg';


const Modal = (props) => {
    const nightMode = props.isNightMode;

    const iconStyle = {
        width:'3rem',
        height: 'auto',
        margin: '1rem'
    }

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      const handleScrollAndToggle = (sectionName) =>{
        props.toggleModal.bind(scrollToSection(sectionName))
    };

    // useEffect(() => {
    //     // Disable scrolling when the modal is open
    //     if (props.isModal) {
    //         console.log('hidden')
    //       document.body.style.overflow = 'hidden';
    //     } else {
    //       // Re-enable scrolling when the modal is closed
    //       document.body.style.overflow = 'auto';
    //     }
    
    //     // Cleanup effect to restore overflow when the component unmounts or when the modal is closed
    //     return () => {
    //       document.body.style.overflow = 'auto';
    //     };
    //   }, [props.isModal]);    
    const hideScroll = () => {
        return props.isModal ? document.body.style.overflow = 'hidden' : 'auto';
    }

    hideScroll()


      const nightModeModalRender = () =>{
        return nightMode ? 
        <div className = {styles['nightMode-mobileModal']} id="mobileModal" >
        <div className={styles['nightMode-modal-container']}>
          <div className={styles['nightMode-modal-span']}>
            <span onClick={props.toggleModal}
            >&times;</span>
            <div className={styles['nightMode-modal-button-div']} onClick={props.toggleModal}> 
            <h1 onClick={() => handleScrollAndToggle('introSection')}>william lin</h1>
            <button onClick={() => handleScrollAndToggle('aboutSection')}>
                  about
                </button>
                <button             onClick={() => handleScrollAndToggle('workSection')}>
                  work
                </button>
                <button             onClick={() => handleScrollAndToggle('contactSection')}>
                  contact
                </button>
                <div className={styles['nightMode-modal-social-media']}>
                <a 
                target='_blank' 
                referrerPolicy= 'noreferrer' 
                href="https://linkedin.com/in/wl96" 
                alt='https://linkedin.com/in/wl96'>
                  <Image 
                  src={whiteLinkedIn}
                  width='100px'
                  height='100px'
                  style={iconStyle}
                  unoptimized/>
                </a>
                <a 
                target='_blank' 
                referrerPolicy= 'noreferrer' 
                href="https://medium.com/@will-lin" 
                alt='https://medium.com/@will-lin' >
                <Image 
                src={whiteMedium}
                width='100px'
                height='100'
                style={iconStyle}
                unoptimized/>
                </a>
                <a 
                target='_blank' 
                referrerPolicy= 'noreferrer' 
                href="https://github.com/Gloompowder" 
                alt='https://github.com/Gloompowder'>
                  <Image 
                  src={whiteGithub}
                  width='100px'
                  height='100px'
                  style={iconStyle}
                  unoptimized/>
                </a>
                </div>
                </div>
          </div>
        </div>
      </div>
        :
        <div className = {styles['mobileModal']} id="mobileModal" >
        <div className={styles['modal-container']}>
          <div className={styles['modal-span']}>
            <span onClick={props.toggleModal}
            >&times;</span>
            <div className={styles['modal-button-div']} onClick={props.toggleModal}> 
            <h1 onClick={() => handleScrollAndToggle('introSection')}>william lin</h1>
            <button onClick={() => handleScrollAndToggle('aboutSection')}>
                  about
                </button>
                <button             onClick={() => handleScrollAndToggle('workSection')}>
                  work
                </button>
                <button             onClick={() => handleScrollAndToggle('contactSection')}>
                  contact
                </button>
                <div className={styles['modal-social-media']}>
                <a 
                target='_blank' 
                referrerPolicy= 'noreferrer' 
                href="https://linkedin.com/in/wl96" 
                alt='https://linkedin.com/in/wl96'>
                  <Image 
                  src={LinkedIn}
                  width='100px'
                  height='100px'
                  style={iconStyle}
                  unoptimized/>
                </a>
                <a 
                target='_blank' 
                referrerPolicy= 'noreferrer' 
                href="https://medium.com/@will-lin" 
                alt='https://medium.com/@will-lin' >
                <Image 
                src={Medium}
                width='100px'
                height='100'
                style={iconStyle}
                unoptimized/>
                </a>
                <a 
                target='_blank' 
                referrerPolicy= 'noreferrer' 
                href="https://github.com/Gloompowder" 
                alt='https://github.com/Gloompowder'>
                  <Image 
                  src={Github}
                  width='100px'
                  height='100px'
                  style={iconStyle}
                  unoptimized/>
                </a>
                </div>
                </div>
          </div>
        </div>
      </div>
      };
  return (
    nightModeModalRender()
  )
}

export default Modal