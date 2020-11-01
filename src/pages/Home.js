import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import DannyAndI from "../projects/DannyAndI.png";
import "./Home.css";
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import Mailto from "../components/Mailto";

const imageStyle = {
    width: "400px",
    height: "300px",
    marginRight: "10px",
    borderRadius: "60px"
}
const introStyle = {
    paddingLeft: "90px",
    color: "#E9C893"
}
const cardStyle = {
    backgroundColor: "#1E392A",
    borderRadius: "30px",
    marginTop: "40px"
}

const Home = ({ networks }) => {
    return (
        <Container className="container-lg">

            <Card style={cardStyle}>
                <Card.Body>
                    <h4 style={introStyle}>Hi, my name is <br /><span className="name-style"><strong>John Edwards,</strong></span><br /> Full Stack Dev</h4>
                    {/* <hr /> */}
                    <Row className="row no-gutters">
                        <Col md="auto">
                            {/* <img src="./Assets/Images/DannyAndI.jpg" class="card-img float-left about-me-image"
                                    alt="Danny and I" /> */}
                            <Card.Img src={DannyAndI} className="float-left" style={imageStyle} />

                        </Col>


                        <Col>
                            <p className="about-me"> I'm a software (and electrical) engineer based in Atlanta, GA with knowledge of:
                            <ul className="ul-no-bullets"><li>MERN (Mongo/MySQL, Express, React, NodeJs),</li><li>Java,</li><li>C/C++,</li><li>Industrial Controls/Specification,</li><li>and much more.</li></ul>
                                <Row>
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
        </Container>
    );
}

export default Home;