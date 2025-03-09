import React from 'react';
import styles from '../styles/Contact.module.css';

const ContactSource = () => {
  return (
    <div>
      <div>347-399-3326</div>
      <div className={styles['nightMode-border']}></div>
      <div>willlin1996@gmail.com</div>
      <div className={styles['nightMode-border']}></div>
      <h4>New York, New York, 10038</h4>
    </div>
  )
}

export default ContactSource