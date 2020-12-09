import React from "react";
import { Container, Navbar} from "react-bootstrap";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Mailto from "../Mailto";
import "./style.css";


const Footer = (props) => {
    return (
        <div className="fixed-bottom">
            <Navbar className="bg-dark">
                <Container>
                    {/* <Row>
                        <Col md={4}> */}
                            <a href="https://github.com/jodoedjr"><FaGithub />My GitHub!</a>
                        {/* </Col>
                        <Col md={4}> */}
                            <a href="https://www.linkedin.com/in/john-edwards-15b638bb/"><FaLinkedin />LinkedIn</a>
                        {/* </Col>
                        <Col md={4}> */}
                            <Mailto email="jdedwards6789@gmail.com" subject="John Edwards - Full Stack Developer" body="Hi John, My name is...">jdedwards6789@gmail.com</Mailto>
                        {/* </Col>
                    </Row> */}
                </Container>
            </Navbar>
        </div>
    )
}

export default Footer;