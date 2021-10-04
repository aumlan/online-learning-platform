import React from 'react';
import vdo from '../img/hero-video.mp4';
import classes from './MyCarousel.module.css';

const MyCarousel = () => {
    return (
      <section>
        <div className={classes.container}>
        <div className={classes.hero_text}>
        <div className={classes.left_content}>
          <p className={classes.stay_home}> Read More!!</p>
            <h1>Be a better version of YOURSELF.</h1>
       
            <p className={classes.para}>
              That's what we need right now. Learn and Grow with us. 
            </p>
            <p className={classes.para}>
              Aumlan Online Learning Academy
            </p>
            <button>Enrole Course</button>
           
            
          </div>
        </div>
        
        <div className={classes.banner_slide}>
        <video autoplay="" muted="" loop="" oncanplay="this.play()" onloadedmetadata="this.muted = true" style={{ 'max-height': '25rem'}} >
            
            <source src={vdo} type="video/mp4"></source>
            
            </video>
        </div>
        
        
        </div>
      </section>
       
            
     
    );
};

export default MyCarousel;