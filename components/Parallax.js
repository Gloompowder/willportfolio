import React from 'react';
import styles from '../styles/Parallax.module.css';
import { useState } from 'react';
import  { useEffect } from 'react';

const Parallax = () => {
    useEffect(() => {
        const scroll = document.querySelector('.scroll1');
        const scroll2 = document.querySelector('.scroll2');
        window.addEventListener('scroll', function (e) {

            var target = document.querySelectorAll('.scrollSpin')
    
            var index = 0, length = target.length;
            for (index = 0; index < length; index ++) {
    
                var targetStyle = target[index].style;
                var currentTarget = target[index];
                // var pos = 
                // currentTarget.dataset.xrate ?
                // window.scrollY * target[index].dataset.xrate
                // :'';
                // targetStyle.transform = 'translate3d('+pos+'px, 0px, 0px)';
                var pos = 
                currentTarget.dataset.spinrate ?
                this.window.scrollY * currentTarget.dataset.spinrate
                :'';
    
                var scaleVar = 
                currentTarget.dataset.spinrate ? 
                this.window.scrollY * ( currentTarget.dataset.spinrate):'';
    
                target[index].style.transform = 'rotate(' +pos+ 'deg)';
            };
    
        })
        
    
        const observer1 = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // entry.target.style.transform = `translateX(-${moveAmount}px)`;
                // entry.target.style.transform = 'translate3d('+pos+'px, 0px, 0px)';
                window.addEventListener('scroll', handleScroll);
                window.addEventListener('resize', handleScroll);
            }else{
                window.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', handleScroll);

            }
          });
        });
    
        observer1.observe(scroll);
        // observer2.observe(scroll2);
    
        // Clean up the observers when the component is unmounted
        return () => {
          observer1.disconnect();
        };
      }, []);
      const handleScroll = () => {
        const scroll = document.querySelector('.scroll1');
        const scroll2 = document.querySelector('.scroll2');
        const scrollAmount = (window.scrollY / 20) - 90; // Adjust this value based on your preference
        scroll.style.transform = `translate3d(-${scrollAmount}px, 0px, 0px)`;
        scroll2.style.transform = `translate3d(${scrollAmount}px, 0px, 0px)`;

      };

    

  return (
    <></>
  )
}

export default Parallax;
