import React from 'react';
import { Button } from 'react-bootstrap';
import classes from './DownloadApp.module.css';

const DownloadApp = () => {
    return (
        <>

        <section>
            <div className="row mb-3">
                <h2>Learn as You Wish! </h2>
                <p>Academic library rich in videos, quizzes, interactive books, get professional and skill development courses always, completely free!</p>
            </div>
            <div className="mb-5">
                <Button variant="success">Download The App</Button>{' '}
            </div>
            
        
                <div className='row d-flex mt-4 mb-5' >

                    <div className={`${classes.content_shadow} content`}>
                        <h4> 1000+ </h4>
                        <p > Video Lecture </p>
                    </div>
                    <div className={`${classes.content_shadow} content`}>
                        <h4> 2500+ </h4>
                        <p > Quizzes </p>
                    </div>
                    <div className={`${classes.content_shadow} content`}>
                        <h4> 1500+ </h4>
                        <p > Notes & Suggetions </p>
                    </div>
                    <div className={`${classes.content_shadow} content`}>
                        <h4> 1300+ </h4>
                        <p > Blogs </p>
                    </div>
                </div>
            
            
            </section>


            
        </>
    );
};

export default DownloadApp;