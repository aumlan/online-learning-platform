import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const CourseDetails = (props) => {
    const {course} = props;
    const history = useHistory();

    const url = `/course/${course.id}`;

    const handleCourseClick = () => {
        history.push(`/course/${course.id}`);
        console.log(url);
    }


    return (
        <div className="col-md-4 mb-3">
            <Card style={{ 'width': '18rem', 'borderRadius': '15px' }}>
                <Card.Img variant="top" src={course.img} />
                    <Card.Body>
                        <Card.Title>{course.title}</Card.Title>
                            <Card.Text>
                            {course.description}
                            </Card.Text>
                        <Button variant="primary" nClick={handleCourseClick} >Enrole</Button>
                    </Card.Body>
                </Card>
        </div>
    );
};

export default CourseDetails;