import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Optional: CSS file for custom styles

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>About Me</h5>
            <p>
            Hello! I'm Hasan Hendawy, a passionate Frontend Developer skilled in HTML, CSS, JavaScript, React, and Bootstrap. I have university training and certifications, and I enjoy creating responsive, user-friendly web applications.
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link className='text-white text-decoration-none' to="/">Home</Link>
              </li>
              <li>
                <Link className='text-white text-decoration-none' to="about">About</Link>
              </li>
              <li>
                <Link className='text-white text-decoration-none' to="/services">Services</Link>
              </li>
              <li>
                <Link className='text-white text-decoration-none' to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link className='text-white text-decoration-none' to="/contact">Contact</Link>
              </li>
            </ul>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Connect</h5>
            <ul className="list-unstyled">
              <li>
                <a className='text-white text-decoration-none ' href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
              </li>
              <li>
                <a className='text-white text-decoration-none ' href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
              </li>
              <li>
                <a className='text-white text-decoration-none ' href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} /> Twitter
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3 bg-secondary">
        &copy; {new Date().getFullYear()} Hasan Hendawy | Built with React-Bootstrap
      </div>
    </footer>
  );
};

export default Footer;
