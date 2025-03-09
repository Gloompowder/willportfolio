import React from 'react';
import styles from '../styles/Contact.module.css';
import Image from 'next/image';
import { useState } from "react";
import ContactSource from './ContactSource';
import SpeechBubble from '../public/speechbubble.svg';
import leftSpeechBubble from '../public/speechbubbleleft.svg';
import nightSpeechBubble from '../public/darkmodespeechbubble.svg';
import nightLeftSpeechBubble from '../public/darkmodespeechbubbleleft.svg';

export default function Contact(props) {

  const nightMode = props.props.isNightMode;

  const divStyle={
    width:'300',
    height:'300',
    backgroundColor:'rgb(255,112,23)'
  }

  const contactImageStyleII = {
    position:'relative',
    width: '10rem',
    height: '10rem',
    filter: 'drop-shadow(3px 3px black)',
    top: '5px'
};
const contactImageStyle = {
  position:'relative',
  width: '10rem',
  height: '10rem',
  filter: 'drop-shadow(3px 3px black)',
};
const nightModecontactImageStyleII = {
  position:'relative',
  width: '10rem',
  height: '10rem',
  filter: 'drop-shadow(3px 3px white)',
  top: '5px'
};
const nightModecontactImageStyle = {
position:'relative',
width: '10rem',
height: '10rem',
filter: 'drop-shadow(3px 3px white)',
};


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [cc, setCC] = useState('');
    const [honey, setHoney] = useState('');
    const [message, setMessage] = useState('');

    

    return(!nightMode ?
    <div className = {styles['contact-background']} id='contactSection'>
    <div className = {styles['contact-container']}>
      <div>
      {/* <Image
    className={styles['contact-image']}
      alt="contact-image"
      src='./undrawContact.svg'
      width="300"
      height="300"
      unoptimized
    /> */}
    <div className={styles['contact-image-container']} id='contact-image-container'>
            <Image 
      src={leftSpeechBubble}
      alt='speechbubble.svg'
      width='100px'
      height='auto'
      style={contactImageStyle}
      className='scroll1'
      data-xrate='.05'
      />
                  <Image 
      src={SpeechBubble}
      alt='speechbubble.svg'
      width='100px'
      height='auto'
      style={contactImageStyleII}
      className='scroll2'
      data-xrate='-.05'
      />
    </div>
    <ContactSource />
      </div>
  <div className={styles['contact-div']}>
    <form target="_blank" className = {styles['my-form']} action="https://formsubmit.co/willlin1996@gmail.com" method="POST">
    <div className={styles['form-group']}>
      <div className={"form-row"}>
      <div className={styles['contact-header-div']}> 
      <h1>Have a Vision?</h1>
      <p className={styles['contact-subhead']}>Let's build it!</p>
      <div className={styles['contact-border']}></div>
    </div>
        <div className = {styles['row-1']}>
        <div className={styles['col']}>
            {/* <label>Name</label> */}
          <input type="text" name="name" className={styles['form-control']} cols="10" placeholder="Full Name" required value={name}     autoComplete='true'      onChange={(e) => setName(e.target.value)}
/>
        </div>
        <div className = {styles['col']}>
            {/* <label>Subject</label> */}
        <input type="text" className = {styles['form-control']}  name="_subject" cols="10" placeholder="Subject" value ={subject}           onChange={(e) => setSubject(e.target.value)}
/>
        </div>
            </div>
            <div className = {styles['row-2']}> 
        <div className={styles['col']}>
            {/* <label>CC</label> */}
    <input className={styles['form-control']} type="text" name="_cc" value={cc}    placeholder="CC" cols="10"      onChange={(e) => setCC(e.target.value)}
/>
</div>
        <div className={styles['col']}>
            {/* <label>Email</label> */}
          <input className={styles['form-control']} type="email" name="email" cols="20" placeholder="Email" value = {email} required     autoComplete='true'      onChange={(e) => setEmail(e.target.value)}
/>
          <input type="hidden" name="_autoresponse" cols="20" value="Thank you for sending a message, I will get back to you ASAP. " readOnly />

      </div>
      </div>
    </div>
    </div>
    <div className = "col-hidden">
    <div style={{ position: 'absolute', left: '-5000px' }}>
          <input type="text" value={honey} onChange={(e) => setHoney(e.target.value)} name="honey" />
        </div>
    </div>
    <div className={styles['form-group-II']}>
        {/* <label className={styles['message']}>Message</label> */}
      <textarea placeholder="Your Message" className={styles['form-control']} name="message" rows="8" cols="45" value={message}           onChange={(e) => setMessage(e.target.value)}
 required></textarea>
    </div>
    <div className ="buttons">
    <button type="submit" className={styles['submit-button']}>Submit</button>
    </div>
  </form>
</div>
  </div>
  </div>:<div className = {styles['nightMode-contact-background']} id='contactSection'>
    <div className = {styles['nightMode-contact-container']}>
      <div>
      {/* <Image
    className={styles['contact-image']}
      alt="contact-image"
      src='./undrawContact.svg'
      width="300"
      height="300"
      unoptimized
    /> */}
    <div className={styles['nightMode-contact-image-container']} id='contact-image-container'>
            <Image 
      src={nightLeftSpeechBubble}
      alt='speechbubble.svg'
      width='100px'
      height='auto'
      style={nightModecontactImageStyle}
      className='scroll1'
      data-xrate='.05'
      />
                  <Image 
      src={nightSpeechBubble}
      alt='speechbubble.svg'
      width='100px'
      height='auto'
      style={nightModecontactImageStyleII}
      className='scroll2'
      data-xrate='-.05'
      />
    </div>
    <ContactSource />
      </div>
  <div className={styles['nightMode-contact-div']}>
    <form target="_blank" className = {styles['nightMode-my-form']} action="https://formsubmit.co/willlin1996@gmail.com" method="POST">
    <div className={styles['nightMode-form-group']}>
      <div className={"form-row"}>
      <div className={styles['nightMode-contact-header-div']}> 
      <h1>Have a Vision?</h1>
      <p className={styles['nightMode-contact-subhead']}>Let's build it!</p>
      <div className={styles['nightMode-contact-border']}></div>
    </div>
        <div className = {styles['nightMode-row-1']}>
        <div className={styles['nightMode-col']}>
            {/* <label>Name</label> */}
          <input type="text" name="name" className={styles['nightMode-form-control']} cols="20" placeholder="Full Name" required value={name}     autoComplete='true'      onChange={(e) => setName(e.target.value)}
/>
        </div>
        <div className = {styles['nightMode-col']}>
            {/* <label>Subject</label> */}
        <input type="text" className = {styles['nightMode-form-control']}  name="_subject" cols="20" placeholder="Subject" value ={subject}           onChange={(e) => setSubject(e.target.value)}
/>
        </div>
            </div>
            <div className = {styles['nightMode-row-2']}> 
        <div className={styles['nightMode-col']}>
            {/* <label>CC</label> */}
    <input className={styles['nightMode-form-control']} type="text" name="_cc" value={cc}    placeholder="CC" cols="20"      onChange={(e) => setCC(e.target.value)}
/>
</div>
        <div className={styles['nightMode-col']}>
            {/* <label>Email</label> */}
          <input className={styles['nightMode-form-control']} type="email" name="email" cols="20" placeholder="Email" value = {email} required     autoComplete='true'      onChange={(e) => setEmail(e.target.value)}
/>
          <input type="hidden" name="_autoresponse" cols="20" value="Thank you for sending a message, I will get back to you ASAP. " readOnly />

      </div>
      </div>
    </div>
    </div>
    <div className = "col-hidden">
    <div style={{ position: 'absolute', left: '-5000px' }}>
          <input type="text" value={honey} onChange={(e) => setHoney(e.target.value)} name="honey" />
        </div>
    </div>
    <div className={styles['nightMode-form-group-II']}>
        {/* <label className={styles['message']}>Message</label> */}
      <textarea placeholder="Your Message" className={styles['nightMode-form-control']} name="message" rows="8" cols="45" value={message}           onChange={(e) => setMessage(e.target.value)}
 required></textarea>
    </div>
    <div className ="buttons">
    <button type="submit" className={styles['nightMode-submit-button']}>Submit</button>
    </div>
  </form>
</div>
  </div>
  </div>
  )
}