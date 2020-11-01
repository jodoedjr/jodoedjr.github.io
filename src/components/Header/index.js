import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import Mailto from "../Mailto";
import "./style.css";

const Header = (props) => {
    return (
        <Navbar expand="lg" className="MyNav">
            <Navbar.Brand className="NavBrand" href="/home"><h4>John Edwards</h4></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto nav-style">
                    <Nav.Link href="/home"><h5>Home</h5></Nav.Link>
                    <Nav.Link href="/projects"><h5>Projects</h5></Nav.Link>
                    <div className="justify-content-end">
                        <Navbar.Text><a href="https://github.com/jodoedjr"><h5><FaGithub /></h5></a></Navbar.Text>
                        <Navbar.Text><a href="https://www.linkedin.com/in/john-edwards-15b638bb/"><h5><FaLinkedin /></h5></a></Navbar.Text>
                        <Navbar.Text><Mailto email="jdedwards6789@gmail.com" subject="John Edwards - Full Stack Developer" body="Hi John, My name is..."><h5><FaMailBulk/></h5></Mailto></Navbar.Text>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;