import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Crud from '../Portfolio/img.PNG';
import Rent from '../Portfolio/rent.PNG'
import Cinema from '../Portfolio/Cinema.PNG'

const CardComponent = () => {
  const handleButtonClick = () => {
    window.location.href = 'https://github.com/Hendawy12345/CRUD-Application';
  };

  const GoToRent = () => {
    window.location.href = 'https://github.com/Hendawy12345/Renting-System';
  };

  const GoToCinema = () => {
    window.location.href = 'https://github.com/Hendawy12345/Cinema';
  };

  return (
    <>

    <h1 className='text-center'> My Works .</h1>
    
    <Container>
      
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4} className="mb-4">
          <Card className="h-100">
            <Card.Img variant="top h-50" src={Crud} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                <p>Create: Add new records.</p>
                <p>Read: Retrieve and display existing records.</p>
                <p>Update: Modify existing records.</p>
                <p>Delete: Remove records.</p>
              </Card.Text>
              <Button variant="primary" onClick={handleButtonClick}>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="mb-4">
          <Card className="h-100">
            <Card.Img variant="top h-50" src={Rent} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                <p>Web-based renting system where owners register</p> 
                <p>upload apartments pending admin approval.</p>
                <p> Students register without upload privileges </p>
                <p>ensuring admin-approved listings only </p>
              </Card.Text>
              <Button variant="primary" onClick={GoToRent}>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="mb-4">
          <Card className="h-100">
            <Card.Img variant="top h-50" src={Cinema} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                <p>
                <p>Discover and explore films and TV </p>
                <p>shows details information about films</p>
                <p> searchable database and responsive design</p>
                <p> Built with React.js and free api</p>
                </p>
              </Card.Text>
              <Button variant="primary" onClick={GoToCinema}>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    </>
  );
};

export default CardComponent;
