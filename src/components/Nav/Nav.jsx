import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand className="text-white" href="#">
          Hendawy <span style={{ color: ' #008cff', fontSize: '30px' }}> . </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="navbar-dark" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
          <Nav className="navbar-nav navbar_link">
            <Nav.Link as={NavLink} to="/" className="nav_link text-white" exact>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav_link text-white">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services" className="nav_link text-white">
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio" className="nav_link text-white">
              Portfolio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav_link text-white">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
