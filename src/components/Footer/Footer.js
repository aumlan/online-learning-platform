import React from 'react';
import logo from '../img/logo.png';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <>

            <section>
                <div className="container">

                    <div className=  {`${classes.footer_nav} row justify-content-center`} >
                        <div className="col-md-5 mx-2">
                        <img src={logo} alt="" width='35px'/>
                        <h5>Aumlan Learning Academy</h5>
                        <h6>+880123456789</h6>
                        <h6>Bashundhara R/A, <br /> Dhaka, Bangladesh</h6>
                        </div>
                        <div className="col-md-5 mx-2">
                            <h6>Quick Links</h6>
                            <ul>
                                <li>Menu</li>
                                <li>About</li>
                                <li>FAQ</li>
                                <li>Service</li>
                          
                            </ul>
                        </div>
                    </div>
                    












                        
                </div>
            </section>
            
        </>
    );
};

export default Footer;