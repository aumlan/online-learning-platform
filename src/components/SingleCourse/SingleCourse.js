import { React } from 'react';
import { useParams } from 'react-router';
const SingleCourse = () => {
    const { courseID } = useParams();

    return (
        <div>
            
            <h2>The Course ID: {courseID}</h2>
            
        </div>
    );
};

export default SingleCourse;