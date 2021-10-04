import React from 'react';
import { Button, Form, InputGroup, Row } from 'react-bootstrap';
import urban from '../img/urban-854.png';

const Contact = () => {
    return (
        <>

<section>
    
            <div className="container mb-5">
            <div className="row mb-5">
                <h2>Contact </h2>
                
            </div>
            <div className="mb-5">
                <h2>Empower your team. Lead the industry.</h2>  
                <br /> 
                <p>Get a subscription to a library of online courses and digital learning tools for your organization with Udemy for Business.</p>
            </div>
            
        
                <div className="row justify-content-center">
                <div className="col-md-5 mx-2">
                <Form >
                    <Row className="mb-3">
                        <Form.Group className="text-start mb-3"  md="4" controlId="validationCustom01">
                        <Form.Label> Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            defaultValue="Mark"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        
                        <Form.Group  md="4" className="text-start mb-3" controlId="validationCustomUsername">
                        <Form.Label>Email</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                            type="text"
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend"
                            required
                            />
                            <Form.Control.Feedback type="invalid">
                            email.
                            </Form.Control.Feedback>
                        </InputGroup>
                        </Form.Group>
                            <Form.Group className=" text-start"  controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            
                        </Row>
                        
                        <Button type="submit">Submit form</Button>
                </Form>
                </div>
                <div className="col-md-5 mx-2">
                    <img src={urban} alt="" width='100%'/>
                </div>
                </div>
            </div>
            
            


            </section>


            
        </>
    );
};

export default Contact;