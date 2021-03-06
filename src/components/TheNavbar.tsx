import React from 'react';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';

// 
// https://react-bootstrap.github.io/components/navbar/
// 


export class TheNavbar extends React.Component {

    render() {
        return (
            <Navbar bg='light' expand='lg'>
                <Navbar.Brand href='/'>Carlos Resume</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Nav.Link href='/home'>Overview</Nav.Link>
                        <Nav.Link href='/projects'>Projects</Nav.Link>
                        <Nav.Link href='/skills'>Skills</Nav.Link>
                        <Nav.Link href='/packages'>Software References</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}