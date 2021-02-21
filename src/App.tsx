import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/esm/Navbar';
import Nav from 'react-bootstrap/esm/Nav';
import { Col, Container } from 'react-bootstrap';
import { TheRouter } from './core/TheRouter';
//
// https://react-bootstrap.github.io/layout/grid/
//

function App() {
  return (
    <TheRouter />
  );
}

export default App;
