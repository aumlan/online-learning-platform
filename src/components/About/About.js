import React from 'react';
import vector2 from '../img/business-3d-295.png';
import vector3 from '../img/business-3d-298.png';
import vector1 from '../img/business-3d-online-business-meeting.png';
import classes from './About.module.css';


const About = () => {
    return (
        <>
            <section>
            <div className="row mb-5">
                <h2>About US </h2>
                
            </div>
            <div className="mb-5">
                <h2>We share knowledge with the world</h2>  
                <br /> 
                <p>Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.We help organizations of all types and sizes prepare for the path ahead — wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies.</p>
            </div>
            
        
                <div className='row d-flex mt-4 mb-5' >

                    <div className={`${classes.content_shadow} content`}>
                        <img src={vector1} alt="" width='70%'/>
                        <h4> Work With Us </h4>
                        <p > At the Company, we’re all learners and instructors. We live out our values every day to create a culture that is diverse, inclusive, and committed to helping employees thrive. </p>
                    </div>
                    <div className={`${classes.content_shadow} content`}>
                    <img src={vector2} alt="" width='70%'/>
                        <h4> See our research </h4>
                        <p > We’re committed to changing the future of learning for the better. Dig into our original research to learn about the forces that are shaping the modern workplace. </p>
                    </div>
                    <div className={`${classes.content_shadow} content`}>
                    <img src={vector3} alt="" width='88%'/>
                        <h4> Read our blog </h4>
                        <p > Want to know what we’ve been up to lately? Check out the Udemy blog to get the scoop on the latest news, ideas and projects, and more. </p>
                    </div>
                </div>
            
            
            </section>
        </>
    );
};

export default About;