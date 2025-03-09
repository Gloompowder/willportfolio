'use client'
import { React, useEffect } from 'react'
import styles from '../styles/Work.module.css';
import Image from 'next/image';

const currentImageStyle = {
    width: "100%",
    height: "auto",
    display: "block",
  };

const iconStyle = {
    maxWidth: '5rem',
    height: 'auto',
    margin: '1rem'
}
  const info = {'Gloompowder':
  {'link':'https://gloompowder.github.io/',
  'description':'Gloompowder is my previous portfolio website. It was designed using Figma and Adobe Illustrator, built with ReactJS, a Javascript Framework. Check it out, I attached my design website to it as well.',
  'techstacks':['Nextjs-logo.svg', 'JavaScript-logo.png', 'Vercel_logo_black.svg', 'Figma Logo.webp']},
  'StudioGloomLinks':
  {'link':'https://studiogloomlinks.vercel.app/',
  'description':"StudioGloomLinks is my alternative to linktree for my own brand, Studio Gloom. It was designed using Figma and Adobe Illustrator, built using JavaScript and Nextjs, a React Framework, and deployed using Vercel. Check it out, it's where I explore my artistic and entrepeneurial side!",
  'techstacks':['Nextjs-logo.svg', 'JavaScript-logo.png', 'Vercel_logo_black.svg', 'Figma Logo.webp']},
  'Hack The Planet':
  {'description':'Hack The Planet is a web browser video game where the user attempts to keep humanity alive by using resources from other planets. The entire game was made from VanillaJS, Javascript, and also the highscore is saved on a Ruby on Rails app on a sqlite database. The steering of the ship, the object collision and more are all coded from scratch without any game engines. This game was made within 48 hours.', 
  'techstacks':['Ruby_logo.svg', 'JavaScript-logo.png','heroku-svgrepo-com.svg'],
  'demo':'https://www.youtube.com/watch?v=GCOHgwZtoK8'},
  'BrainGain':
  {'demo':'https://www.youtube.com/watch?v=CP9cpjrCVSA',
  'description':"BrainGain is inspired by traditional flashcards, its a web app which allows users to study, randomize their decks, and check out other user's decks. The backend is made with Ruby on Rails and a sqlite database. The frontend is React and vanillaCSS.",
  'techstacks':['JavaScript-logo.png', 'Ruby_logo.svg']}}
  
const WorkPopup = (props) => {
    const nightMode = props.props.props.isNightMode;
    const handleClick = (e) => {
        const modalPopup = document.getElementById('workPopup');
        // Check if the clicked element is outside the modal
          props.toggleWorkModal()
      };

    //   const handleInsideClick=(e) => {
    //     e.stopPropogation();
    //   }
    const title = props.conditionalRenderWorkImage.slice(2);
    const thisEntry = info[title];

    useEffect(() => {
        // Disable scrolling when the modal is open
        if (props.isModal) {
          document.body.style.overflow = 'hidden';
        } else {
          // Re-enable scrolling when the modal is closed
          document.body.style.overflow = 'auto';
        }

        // Cleanup effect to restore overflow when the component unmounts or when the modal is closed
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [props.isModal]);

  return (
    !nightMode ? 
    <div onClick={handleClick} id='workPopup' className={styles['workPopup']} >
        <div onClick={(e) => {e.stopPropagation()}}className={styles['work-modal-content']}>
            <div className={styles['workModalHeader']}>
            <h1>{title}</h1>
            <div onClick= {handleClick}className={styles['close']} >&times;</div>
            </div>
            <div className={props.conditionalRenderWorkImage}>
            <Image
                alt={props.conditionalRenderWorkImage}
                className={props.conditionalRenderWorkImage}
                src={props.conditionalRenderWorkImage + ".png"}
                width="100"
                height="100"
                style={currentImageStyle}
                unoptimized
              />
              {thisEntry.techstacks ? (
                <div className= {styles['work-tech-container']}>
                    {thisEntry.techstacks.map((tech) => (
                    // <div className= 'tech' key={tech}>{tech}</div>
                    <Image 
                    alt = {tech} 
                    src={tech} 
                    width='100' 
                    height='100' 
                    style={iconStyle}
                    unoptimized />
                    ))}
                </div>
                ) : null}
                <p>{thisEntry.description}</p>

              {thisEntry.demo? 
              <a className={styles['work-demo-button']} href={thisEntry.demo} alt = {title + 'demo'}target='_blank' referrerPolicy= 'noopener noreferrer'>Demo</a>
              : ''}
              {thisEntry.link?
              <a className={styles['work-link-button']}href={thisEntry.link} alt={title + 'link'} target='_blank' referrerPolicy= 'noopener noreferrer'> Link</a>
              : ''}
              
            </div>
        </div>
    </div>:
        <div onClick={handleClick} id='workPopup' className={styles['nightMode-workPopup']} >
        <div onClick={(e) => {e.stopPropagation()}}className={styles['nightMode-work-modal-content']}>
            <div className={styles['nightMode-workModalHeader']}>
            <h1>{title}</h1>
            <div onClick= {handleClick}className={styles['nightMode-close']} >&times;</div>
            </div>
            <div className={props.conditionalRenderWorkImage}>
            <Image
                alt={props.conditionalRenderWorkImage}
                className={props.conditionalRenderWorkImage}
                src={props.conditionalRenderWorkImage + ".png"}
                width="100"
                height="100"
                style={currentImageStyle}
                unoptimized
              />
              {thisEntry.techstacks ? (
                <div className= {styles['nightMode-work-tech-container']}>
                    {thisEntry.techstacks.map((tech) => (
                    // <div className= 'tech' key={tech}>{tech}</div>
                    <Image 
                    alt = {tech} 
                    src={tech} 
                    width='100' 
                    height='100' 
                    style={iconStyle}
                    unoptimized />
                    ))}
                </div>
                ) : null}
                <p>{thisEntry.description}</p>

              {thisEntry.demo? 
              <a className={styles['nightMode-work-demo-button']} href={thisEntry.demo} alt = {title + 'demo'}target='_blank' referrerPolicy= 'noopener noreferrer'>Demo</a>
              : ''}
              {thisEntry.link?
              <a className={styles['nightMode-work-link-button']}href={thisEntry.link} alt={title + 'link'} target='_blank' referrerPolicy= 'noopener noreferrer'> Link</a>
              : ''}
              
            </div>
        </div>
    </div>
  )
}

export default WorkPopup