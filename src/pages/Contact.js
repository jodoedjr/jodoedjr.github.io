import React from "react";
import { Card, Row, Col, Form, Container, Button } from "react-bootstrap";
import Mailto from "../components/Mailto";
// import Nav from "../components/Nav";

const Contact = () => {
    return (
        <Container>
            {/* <Col md={9}> */}
            <Card>
                <Card.Body>
                    <h2>Contact Me</h2>
                    <p>or </p><Mailto email="jdedwards6789@gmail.com" subject="John Edwards - Full Stack Developer" body="Hi John, My name is...">Mailto</Mailto>
                    <hr />
                    {/* <Row className="no-gutters">
                        <Col md={12}> */}
                    <Form>
                        <Form.Group controlId="contactForm.email">
                            <Form.Label>Your Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group controlId="contactForm.subject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="input" placeholder="John Edwards - Full Stack Developer" />
                        </Form.Group>
                        <Form.Group controlId="contactForm.message">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                    {/* </Col>
                    </Row> */}
                </Card.Body>
            </Card>
            {/* </Col> */}
        </Container>
    )
}

export default Contact;