
import React from 'react'
import styles from '../styles/spinners.module.css';
import Image from 'next/image';
import Starburst from '../public/starburst.svg';
import NightModeStarburst from '../public/darkmodestarburst.svg';

const Spinners = ({ isNightMode }) => {
    const nightMode = isNightMode;

    const conditionalStarburstRender = () => {
        return nightMode ? NightModeStarburst : Starburst;
    };
  return (
    <div className={styles['spinners']}>
        <div className= 'scrollSpin' data-spinrate='.2'>
            <Image 
            src={conditionalStarburstRender()}
            alt='rotating starburst shape'
            layout={'fill'}
            />
        </div>
        <div className= 'scrollSpin' data-spinrate='-.2'>
        <Image 
            src={conditionalStarburstRender()}
            alt='rotating starburst shape'
            layout={'fill'}
            />
        </div>
        <div className= 'scrollSpin' data-spinrate='.2'>
        <Image 
            src={conditionalStarburstRender()}
            alt='rotating starburst shape'
            layout={'fill'}
            />
        </div>
    </div>
  )
}

export default Spinners