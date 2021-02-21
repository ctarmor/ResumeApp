import React from 'react';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';

export class TheNavbar extends React.Component {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <Navbar bg='light' expand='sm'>
                <Navbar.Brand href='#home'>Carlos Resume</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Nav.Link href='/home'>Overview</Nav.Link>
                        <Nav.Link href='/projects'>Projects</Nav.Link>
                        <Nav.Link href='/technology'>Technology</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}