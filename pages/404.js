// import { useEffect } from 'react';
import styles from '../styles/NotFound.module.css';
// import ScrollToSection from '@/components/ScrollToSection';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react'
 
// import {usePathname } from 'next/navigation';
const handleClick = () => {
  window.location.assign('/')
};


const NotFound = () => {
  const router = useRouter();
  const pathname = usePathname();

  const planetSize = pathname.slice(1).length * 100;
  const planetClouds = '';
  const planetLand ='';
  const planetWater ='';

  return (
    <div className={styles['notFound']}>
      <div>
        <h1>404</h1>
        <h2>Not Found</h2>
        <div className={styles['border']}></div>
        {/* Display the information as needed */}
        <p>Can't find </p>
        <p>{pathname.slice(1)}</p>
        <a href='/'>Return Home</a>
      </div>
    </div>
  );
};

export default NotFound;
