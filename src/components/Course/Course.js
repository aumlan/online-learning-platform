import { React, useEffect, useState } from 'react';
import CourseDetails from '../CourseDetails/CourseDetails';


const Course = ({route}) => {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('./Course.JSON')
            .then(res => res.json())
            .then(data => route==='home' ? setCourse(data.slice(0,3)) : setCourse(data));
    }, []);

    return (
        <>
            <section>
                {
                    route==='home' ? '' : 
                    (
                        <div className="row mb-5">
                            <h2>Service </h2>
                        </div>
                    )

                }  
            
            <div className="row mb-4">
                <h2>Courses We are Offering </h2>
                <span> {route==='home' ? 'In Homepage showing 3' : ''} </span>

                <br />
            </div>
            <div className='container'>
            
                <div className='row d-flex' >
                    
                    {
                        course.map(course => 
                            
                                <CourseDetails 
                                    key={course.id} 
                                    course={course} 
                                ></CourseDetails>)
                            
                    }
                    
                </div>
                
            </div>

            
            </section>


            
        </>
    );
};

export default Course;