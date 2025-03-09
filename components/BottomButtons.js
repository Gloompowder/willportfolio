import NightModeButton from './NightModeButton';
import ScrollButton from './ScrollButton';
import styles from '../styles/BottomButtons.module.css';
import React from 'react'
import { lazy, Suspense } from 'react';
import ContactButton from './ContactButton';

const BottomButtons = ({isNightMode, toggleNightMode, windowSize}) => {
        //lazy scrollbutton
        const ScrollButton = lazy(() => import('../components/ScrollButton'));
  return (
    <div className={styles['buttons-container']}>
                <NightModeButton isNightMode={isNightMode} toggleNightMode={toggleNightMode} windowSize={windowSize}/> 
        <Suspense fallback={null}>
            <ScrollButton isNightMode={isNightMode}/>
        </Suspense>
        <div>
        </div>
    </div>
  )
}

export default BottomButtons

