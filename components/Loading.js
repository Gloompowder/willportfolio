// components/Loading.js
import React from 'react';
import styles from'../styles/Loading.module.css';

const Loading = () => (
  <div className={styles['loading']}>
    <div>
        <div className={styles['loading-bar']}>
            <h1>loading...</h1>
            <div className={styles['dot-separator']}>            
                <div className={styles['dot-1']}>
            </div>
            <div className={styles['dot-2']}>
            </div>
            <div className={styles['dot-3']}></div>
            </div>
        </div>
        <div className={styles['border']}></div>
        <div className={styles['loader']}>
        </div>
    </div>
  </div>
);

export default Loading;
