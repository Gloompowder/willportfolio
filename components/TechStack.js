import React from 'react';
import styles from '../styles/techstack.module.css';
import Image from 'next/image';

const TechStack = (props) => {

  const nightMode = props.props.isNightMode;

  const iconStyle = {
    maxWidth:'4rem',
    height:'auto',
  }

  const nightModeTechStackRender = () => {
    return !nightMode ? 
    <div className={styles['techdiv']}>
      <h1 >Dev Tools</h1>
      <div className={styles['techstacks']}>
        <div>
        <Image className={styles['techstack-image']}src='/Nextjs-logo.svg'
          alt='Nextjs Logo'
          width='100'
          height='100'
          style={iconStyle}
          />
          <p>Next.js</p>
        </div>
        <div>
        <Image className={styles['techstack-image']}src='/JavaScript-logo.png'
          alt='JavascriptLogo'
          width='100'
          height='100'
          style={iconStyle}
          />
          <p>Javascript</p>
        </div>
        <div>
        <Image className={styles['techstack-image']}src='/Ruby_logo.svg'
          alt='Ruby Logo'
          width='100'
          height='100'
          style={iconStyle}
          />
          <p>Ruby</p>
        </div>
        <div>
        <Image className={styles['techstack-image']}src='/Vercel_logo_black.svg'
          alt='Vercel Logo'
          width='100'
          height='100'
          style={iconStyle}
          />
        <p>Vercel</p>
        </div>
        <div>
        <Image className={styles['techstack-image']}src='/Postgresql_elephant.svg'
          alt='PostgreSQL Logo'
          width='100'
          height='100'
          style={iconStyle}
          />
        <p>PostgreSQL</p>
        </div>
      </div>
      <h1>Design Tools</h1>
      <div className={styles['techstacks']}>
        <div>
        <Image className={styles['techstack-image']}src='/Adobe_Illustrator_CC_icon.svg'
          alt='Illustrator Logo'
          width='100'
          height='100'
          style={iconStyle}
          />
          <p>Adobe Illustrator</p>
        </div>
        <div>
        <Image className={styles['techstack-image']}src='/Adobe_Photoshop_CC_icon.svg'
          alt='Photoshop Logo'
          width='100'
          height='100'
          style={iconStyle}
          />
          <p>Adobe Photoshop</p>
        </div>
        <div>
        <Image className={styles['techstack-image']}src='/Adobe_InDesign_CC_icon.svg'
          alt='InDesign Logo'
          width='100'
          height='100'
          style={iconStyle}
          />
          <p>Adobe InDesign</p>
        </div>
        <div>
        <Image className={styles['techstack-image']}src='/Figma Logo.webp'
          alt='Figma Logo'
          width='100'
          height='100'
          style={iconStyle}
          />
        <p>Figma</p>
        </div>
        <div>
        <Image className={styles['techstack-image']}src='/Procreate-icon.png'
          alt='Procreate Logo'
          width='100'
          height='100'
          style={iconStyle}
          />
        <p>Procreate</p>
        </div>
      </div>
      {/* <Spinners/> */}
    </div>:
    <div className={styles['nightMode-techdiv']}>
    <h1 >Dev Tools</h1>
    <div className={styles['nightMode-techstacks']}>
      <div>
      <Image className={styles['nightMode-techstack-image']}src='/Nextjs-logo.svg'
        alt='Nextjs Logo'
        width='100'
        height='100'
        style={iconStyle}
        />
        <p>Next.js</p>
      </div>
      <div>
      <Image className={styles['nightMode-techstack-image']}src='/JavaScript-logo.png'
        alt='JavascriptLogo'
        width='100'
        height='100'
        style={iconStyle}
        />
        <p>Javascript</p>
      </div>
      <div>
      <Image className={styles['nightMode-techstack-image']}src='/Ruby_logo.svg'
        alt='Ruby Logo'
        width='100'
        height='100'
        style={iconStyle}
        />
        <p>Ruby</p>
      </div>
      <div>
      <Image className={styles['nightMode-techstack-image']}src='/Vercel_logo_black.svg'
        alt='Vercel Logo'
        width='100'
        height='100'
        style={iconStyle}
        />
      <p>Vercel</p>
      </div>
      <div>
      <Image className={styles['nightMode-techstack-image']}src='/Postgresql_elephant.svg'
        alt='PostgreSQL Logo'
        width='100'
        height='100'
        style={iconStyle}
        />
      <p>PostgreSQL</p>
      </div>
    </div>
    <h1>Design Tools</h1>
    <div className={styles['nightMode-techstacks']}>
      <div>
      <Image className={styles['nightMode-techstack-image']}src='/Adobe_Illustrator_CC_icon.svg'
        alt='Illustrator Logo'
        width='100'
        height='100'
        style={iconStyle}
        />
        <p>Adobe Illustrator</p>
      </div>
      <div>
      <Image className={styles['nightMode-techstack-image']}src='/Adobe_Photoshop_CC_icon.svg'
        alt='Photoshop Logo'
        width='100'
        height='100'
        style={iconStyle}
        />
        <p>Adobe Photoshop</p>
      </div>
      <div>
      <Image className={styles['nightMode-techstack-image']}src='/Adobe_InDesign_CC_icon.svg'
        alt='InDesign Logo'
        width='100'
        height='100'
        style={iconStyle}
        />
        <p>Adobe InDesign</p>
      </div>
      <div>
      <Image className={styles['nightMode-techstack-image']}src='/Figma Logo.webp'
        alt='Figma Logo'
        width='100'
        height='100'
        style={iconStyle}
        />
      <p>Figma</p>
      </div>
      <div>
      <Image className={styles['nightMode-techstack-image']}src='/Procreate-icon.png'
        alt='Procreate Logo'
        width='100'
        height='100'
        style={iconStyle}
        />
      <p>Procreate</p>
      </div>
    </div>
    {/* <Spinners/> */}
  </div>
  }
  return (
    nightModeTechStackRender()
  )
}

export default TechStack