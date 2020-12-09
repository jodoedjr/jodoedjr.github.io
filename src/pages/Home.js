import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import DannyAndI from "../projects/DannyAndI.png";
import "./Home.css";
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import Mailto from "../components/Mailto";
import { Link } from "react-router-dom";


const Home = ({ networks }) => {
    let aboutMeText = `I'm a software (and electrical) engineer based in Atlanta, GA who knows a little about:\n
    MERN (Mongo/MySQL, Express, React, NodeJs),
    Java, C/C++,
    Industrial Controls and Specification,
    - and much more.
     `

    return (
        <Container className="container-lg">

            <Card className="card-style">
                <Card.Body>
                    <h4 className="intro-style center-text bottom-space">Hi, my name is <br /><span className="name-style"><strong>John Edwards</strong></span>,<br /> Full Stack Dev</h4>
                    {/* <hr /> */}
                    <Row className="row no-gutters">
                        {/* <Col md="auto"> */}
                        <Col lg="6" xl="5" className="m-auto">
                            {/* <img src="./Assets/Images/DannyAndI.jpg" class="card-img float-left about-me-image"
                                    alt="Danny and I" /> */}
                            <Card.Img src={DannyAndI} className="image-style mx-auto" fluid />

                        </Col>
                        <Col>
                            <p className="about-me"> 
                                I'm a software (and electrical) engineer based in Atlanta, GA who knows a little about:
                            <ul className="ul-no-bullets intro-style">
                                <li>MERN (Mongo/MySQL, Express, React, NodeJs),</li>
                                <li>Java, C/C++, VHDL,</li>
                                <li>Industrial Controls and Specification,</li>
                                <li>- and much more.</li>
                            </ul>
                            Check out what I'm working on: <Link to="/projects">Projects</Link>
                            <Row style={{ marginTop: "10px", paddingBottom: "30px" }}>
                                <Col align="center">
                                    <a href="https://github.com/jodoedjr"><FaGithub /></a>
                                </Col>
                                <Col align="center">
                                    <a href="https://www.linkedin.com/in/john-edwards-15b638bb/"><FaLinkedin /></a>
                                </Col>
                                <Col align="center">
                                    <Mailto email="jdedwards6789@gmail.com" subject="John Edwards - Full Stack Developer" body="Hi John, My name is..."><FaMailBulk /></Mailto>
                                </Col>
                                <Col align="center">
                                    <Button variant="success" ><a className="resume-button" href="https://drive.google.com/file/d/1KCwJXYe_onlVY7QL-TtLlpMp3tZx1z3d/view?usp=sharing">Resume!</a></Button>
                                </Col>
                            </Row>
                            </p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container >
    );
}

export default Home;