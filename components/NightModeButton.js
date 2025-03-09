// NightModeButton.js

import React from 'react';
import styles from '../styles/BottomButtons.module.css';
import Image from 'next/image';
import Moon from '../public/moon.svg';
import Sun from '../public/sun.svg';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

const NightModeButton = ({ isNightMode, toggleNightMode }) => {
    const router = useRouter();
    const path = usePathname();
    const conditionalNightModeRender = () => {return isNightMode?
    <button className={styles['day-button']} onClick={toggleNightMode}>
                <Image className={styles['sun-svg']}
      src={Sun}
      width={20}
      height={20}
      alt="sun icon"
    />
    </button>:
    <button className={styles['night-button']} onClick={toggleNightMode}>
                <Image className={styles['moon-svg']}
      src={Moon}
      width={20}
      height={20}
      alt="moon icon"
    />
    </button>
};

const conditionalHomeRenderNightButton = () => 
    path != '/' ? '' : conditionalNightModeRender();
;

  return (
    conditionalHomeRenderNightButton()
  );
};

export default NightModeButton;
