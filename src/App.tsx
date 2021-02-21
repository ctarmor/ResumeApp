import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/esm/Navbar';
import Nav from 'react-bootstrap/esm/Nav';
import { Col, Container } from 'react-bootstrap';
import { TheRouter } from './core/TheRouter';
import Row from 'react-bootstrap/esm/Row';
import { TheNavbar } from './components/TheNavbar';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <TheNavbar />
        </Col>
      </Row>
      <Row>
        <Col>
          <TheRouter />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
