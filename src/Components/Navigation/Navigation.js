import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    const activeStyle = {
        color: 'rgb(226, 101, 43)'
    };

    return (
        <div className="navigation">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">Rezwans'</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navigation-link me-auto">
                            <Nav.Link activeStyle={activeStyle} as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link activeStyle={activeStyle} as={NavLink} to="/about">About</Nav.Link>
                            <Nav.Link activeStyle={activeStyle} as={NavLink} to="/skills">Skills</Nav.Link>
                            <Nav.Link activeStyle={activeStyle} href="https://drive.google.com/uc?export=download&id=17actcWAUKDUE7VQtl5QNR3g8jROcn6fs">Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;