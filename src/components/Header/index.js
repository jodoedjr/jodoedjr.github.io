import React from "react";
import {Link} from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import Mailto from "../Mailto";
import "./style.css";

const Header = (props) => {
    return (
        <Navbar expand="lg" className="bg-dark">
            {/* className="MyNav" */}
            <Navbar.Brand className="NavBrand"><h4><Link className="white-text" to="/">John Edwards</Link></h4></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto nav-style">
                    <Nav.Link><Link to="/"><h5>Home</h5></Link></Nav.Link>
                    <Nav.Link><Link to="/projects"><h5>Projects</h5></Link></Nav.Link>
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