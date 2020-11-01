import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Mailto from "../Mailto";


const Footer = (props) => {
    return (
        <div className="fixed-bottom">
            <Navbar className="bg-dark">
                <Container>
                    <a href="https://github.com/jodoedjr"><FaGithub />My GitHub!</a>
                    <a href="https://www.linkedin.com/in/john-edwards-15b638bb/"><FaLinkedin />LinkedIn</a>
                    <Mailto email="jdedwards6789@gmail.com" subject="John Edwards - Full Stack Developer" body="Hi John, My name is...">jdedwards6789@gmail.com</Mailto>
                    Copyright 2020 © John Edwards
                </Container>
            </Navbar>
        </div>
    )
}

export default Footer;