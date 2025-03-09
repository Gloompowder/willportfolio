
import React from 'react';
import styles from '../styles/About.module.css';
import Image from 'next/image';


const About = ({ props }) => {
    const nightMode = props.isNightMode;

    const imageStyle = {
        width:'100%',
        height:'auto',
    };
  const windowWidth = props.windowSize.width;


  const PDF = '../public/William-Lin-NY.pdf';


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderMobileParagraph = windowWidth > 600 ? (
    <div className={styles['about-container']} >
        <div className={styles['portrait-paragraph']}>
        <div className={styles['self-portrait']}>
            <Image className={styles['techstack-image']}src='/SelfPortrait.jpg'
            alt='Self Portrait'
            width='100'
            height='100'
            style={imageStyle}
            />
        </div>
        <div className={styles['about-paragraphs']}>
        <p className={styles['paragraph1']}>Hi friends! I am a dynamic, well-rounded, and adaptable developer and multimedia artist based in the Big Apple. 
        You can always find me at a local library or cafe, coding up a storm or working on a new personal art project no matter the media. 
        I love solving complex problems and creating compelling work that's efficient and aesthetically pleasing. 
      </p>
      <p className={styles['paragraph2']}>With a formal education in graphic design and business and a self-taught mentality on programming, I'm sure I can build any digital products you need. 
        During my free time, I enjoy painting, gardening, and making stickers and trinkets for my own brand.
      </p>
      <div className={styles['about-buttons-container']}>
      <a className={styles['studiogloom']} alt='studiogloom' target='_blank' referrerPolicy= 'noopener noreferrer' href="https://studiogloomlinks.vercel.app/">Studio Gloom</a>
      {/* <a className={styles['resume']} target='_blank' referrerPolicy= 'noopener noreferrer' href={} alt='William-Lin-NYResume'>Resume</a> */}
      <a className={styles['resume']} alt='resume' href="/William-Lin-NY.pdf" target="_blank" rel="noopener noreferrer">
        Resume
      </a>
      <a className={styles['contact']} alt='contact' onClick={() => scrollToSection('contactSection')}>Contact</a>
      </div>
        </div>
        </div>
    </div>
  ) : (
    <div className={styles['mobile-about-container']} >
        <div className={styles['mobile-self-portrait']}>
            <Image className={styles['techstack-image']}src='/SelfPortrait.jpg'
            alt='Self Portrait'
            width='100'
            height='100'
            style={imageStyle}
            />
        </div>
        <div className={styles['mobile-about-paragraphs']} >
        <p className={styles['paragraph1']}>Hi friends! I am a dynamic, well-rounded, and adaptable developer and multimedia artist based in the Big Apple. 
        You can always find me at a local library or cafe, coding up a storm or working on a new personal art project. I love solving complex problems and creating 
        compelling work that's efficient, effective, and aesthetically pleasing. 
      </p>
      <p className={styles['paragraph2']}>With a formal education in graphic design and business and a self-taught mentality on programming, I can build any digital products. 
        I enjoy painting, gardening, and making stickers and trinkets for my Studio Gloom.
      </p>
        </div>
      <div className={styles['mobile-about-buttons-container']}>
      <a className={styles['studiogloom']} alt='studiogloom'target='_blank' referrerPolicy= 'noopener noreferrer' href="https://studiogloomlinks.vercel.app/">Studio Gloom</a>
      <a className={styles['resume']} alt='resume'href="/William-Lin-NY.pdf" target="_blank" rel="noopener noreferrer">
        Resume
      </a>
      <a className={styles['contact']} alt='contact' onClick={() => scrollToSection('contactSection')}>Contact</a>
      </div>
    </div>
  );


  const nightModeAboutRender = () => {
    return !nightMode && windowWidth > 600 ?     <div id='aboutSection' className={styles['about-component']}>
    <h1>About</h1>
    <div className={styles['About-container']}>
      <div className={styles['about-image']}></div>
      <div className={styles['about-container']} >
        <div className={styles['portrait-paragraph']}>
        <div className={styles['self-portrait']}>
            <Image className={styles['techstack-image']}src='/SelfPortrait.jpg'
            alt='Self Portrait'
            width='100'
            height='100'
            style={imageStyle}
            />
        </div>
        <div className={styles['about-paragraphs']}>
        <p className={styles['paragraph1']}>Hi friends! I am a dynamic, well-rounded, and adaptable developer and multimedia artist based in the Big Apple. 
        You can always find me at a local library or cafe, coding up a storm or working on a new personal art project no matter the media. 
        I love solving complex problems and creating compelling work that's efficient and aesthetically pleasing. 
      </p>
      <p className={styles['paragraph2']}>With a formal education in graphic design and business and a self-taught mentality on programming, I'm sure I can build any digital products you need. 
        During my free time, I enjoy painting, gardening, and making stickers and trinkets for my own brand.
      </p>
      <div className={styles['about-buttons-container']}>
      <a className={styles['studiogloom']} alt='studiogloom' target='_blank' referrerPolicy= 'noopener noreferrer' href="https://studiogloomlinks.vercel.app/">Studio Gloom</a>
      {/* <a className={styles['resume']} target='_blank' referrerPolicy= 'noopener noreferrer' href={} alt='William-Lin-NYResume'>Resume</a> */}
      <a className={styles['resume']} alt='resume' href="/William-Lin-NY.pdf" target="_blank" rel="noopener noreferrer">
        Resume
      </a>
      <a className={styles['contact']} alt='contact' onClick={() => scrollToSection('contactSection')}>Contact</a>
      </div>
        </div>
        </div>
    </div>
    </div>
  </div>:
    nightMode && windowWidth > 600 ?     <div id='aboutSection' className={styles['nightMode-about-component']}>
    <h1>About</h1>
    <div className={styles['nightMode-About-container']}>
      <div className={styles['nightMode-about-image']}></div>
      <div className={styles['nightMode-about-container']} >
        <div className={styles['nightMode-portrait-paragraph']}>
        <div className={styles['nightMode-self-portrait']}>
            <Image className={styles['nightMode-techstack-image']}src='/SelfPortrait.jpg'
            alt='Self Portrait'
            width='100'
            height='100'
            style={imageStyle}
            />
        </div>
        <div className={styles['nightMode-about-paragraphs']}>
        <p className={styles['nightMode-paragraph1']}>Hi friends! I am a dynamic, well-rounded, and adaptable developer and multimedia artist based in the Big Apple. 
        You can always find me at a local library or cafe, coding up a storm or working on a new personal art project no matter the media. 
        I love solving complex problems and creating compelling work that's efficient and aesthetically pleasing. 
      </p>
      <p className={styles['nightMode-paragraph2']}>With a formal education in graphic design and business and a self-taught mentality on programming, I'm sure I can build any digital products you need. 
        During my free time, I enjoy painting, gardening, and making stickers and trinkets for my own brand.
      </p>
      <div className={styles['nightMode-about-buttons-container']}>
      <a className={styles['nightMode-studiogloom']} alt='studiogloom' target='_blank' referrerPolicy= 'noopener noreferrer' href="https://studiogloomlinks.vercel.app/">Studio Gloom</a>
      {/* <a className={styles['resume']} target='_blank' referrerPolicy= 'noopener noreferrer' href={} alt='William-Lin-NYResume'>Resume</a> */}
      <a className={styles['nightMode-resume']} alt='resume' href="/William-Lin-NY.pdf" target="_blank" rel="noopener noreferrer">
        Resume
      </a>
      <a className={styles['nightMode-contact']} alt='contact' onClick={() => scrollToSection('contactSection')}>Contact</a>
      </div>
        </div>
        </div>
    </div>
    </div>
  </div>:
    nightMode && windowWidth <= 600 ?     <div id='aboutSection' className={styles['nightMode-about-component']}>
    <h1>About</h1>
    <div className={styles['nightMode-About-container']}>
      <div className={styles['nightMode-about-image']}></div>
      <div className={styles['nightMode-mobile-about-container']} >
        <div className={styles['nightMode-mobile-self-portrait']}>
            <Image className={styles['nightMode-techstack-image']}src='/SelfPortrait.jpg'
            alt='Self Portrait'
            width='100'
            height='100'
            style={imageStyle}
            />
        </div>
        <div className={styles['nightMode-mobile-about-paragraphs']} >
        <p className={styles['nightMode-paragraph1']}>Hi friends! I am a dynamic, well-rounded, and adaptable developer and multimedia artist based in the Big Apple. 
        You can always find me at a local library or cafe, coding up a storm or working on a new personal art project. I love solving complex problems and creating 
        compelling work that's efficient, effective, and aesthetically pleasing. 
      </p>
      <p className={styles['nightMode-paragraph2']}>With a formal education in graphic design and business and a self-taught mentality on programming, I can build any digital products. 
        I enjoy painting, gardening, and making stickers and trinkets for my Studio Gloom.
      </p>
        </div>
      <div className={styles['nightMode-mobile-about-buttons-container']}>
      <a className={styles['nightMode-studiogloom']} alt='studiogloom'target='_blank' referrerPolicy= 'noopener noreferrer' href="https://studiogloomlinks.vercel.app/">Studio Gloom</a>
      <a className={styles['nightMode-resume']} alt='resume'href="/William-Lin-NY.pdf" target="_blank" rel="noopener noreferrer">
        Resume
      </a>
      <a className={styles['nightMode-contact']} alt='contact' onClick={() => scrollToSection('contactSection')}>Contact</a>
      </div>
    </div>
    </div>
  </div>:
    !nightMode && windowWidth <= 600 ?     <div id='aboutSection' className={styles['about-component']}>
    <h1>About</h1>
    <div className={styles['About-container']}>
      <div className={styles['about-image']}></div>
      <div className={styles['mobile-about-container']} >
        <div className={styles['mobile-self-portrait']}>
            <Image className={styles['techstack-image']}src='/SelfPortrait.jpg'
            alt='Self Portrait'
            width='100'
            height='100'
            style={imageStyle}
            />
        </div>
        <div className={styles['mobile-about-paragraphs']} >
        <p className={styles['paragraph1']}>Hi friends! I am a dynamic, well-rounded, and adaptable developer and multimedia artist based in the Big Apple. 
        You can always find me at a local library or cafe, coding up a storm or working on a new personal art project. I love solving complex problems and creating 
        compelling work that's efficient, effective, and aesthetically pleasing. 
      </p>
      <p className={styles['paragraph2']}>With a formal education in graphic design and business and a self-taught mentality on programming, I can build any digital products. 
        I enjoy painting, gardening, and making stickers and trinkets for my Studio Gloom.
      </p>
        </div>
      <div className={styles['mobile-about-buttons-container']}>
      <a className={styles['studiogloom']} alt='studiogloom'target='_blank' referrerPolicy= 'noopener noreferrer' href="https://studiogloomlinks.vercel.app/">Studio Gloom</a>
      <a className={styles['resume']} alt='resume'href="/William-Lin-NY.pdf" target="_blank" rel="noopener noreferrer">
        Resume
      </a>
      <a className={styles['contact']} alt='contact' onClick={() => scrollToSection('contactSection')}>Contact</a>
      </div>
    </div>
    </div>
  </div>:
    ''
  };

  return (
    nightModeAboutRender()
  );
};

export default About;
