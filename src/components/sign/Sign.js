import { useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from 'react'
import './Sign.css';

function Sign() {
 
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
  return (
    
    <div className='cont bg-primary'>
      
  <Link to="admin">  <Button  variant="primary" >Admin </Button> </Link>

    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
        <div className="border border-2 border-primary"></div>
          <Card className="shadow px-4">
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-2 text-center text-uppercase ">Logo</h2>
                <div className="mb-3">
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                        <Form.Control.Feedback type="invalid">
                            Please enter a validated email.
                            </Form.Control.Feedback>
                      </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" required />
                      <Form.Control.Feedback type="invalid">
                          Please enter a validated password.
                          </Form.Control.Feedback>
                    </Form.Group>
                   
                    
                    <div className="d-grid">
                      <Button variant="primary" type="submit">
                        se connecter
                      </Button>
                    </div>
                  </Form>
                 
                </div>
              </div>
            </Card.Body>
           </Card>
         </Col>
       </Row>
     </Container>
  </div>
  );
}

export default Sign;