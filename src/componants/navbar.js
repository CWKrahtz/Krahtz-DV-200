import React from "react";
import { Container } from 'react-bootstrap';
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";


function BasicNavbar(){
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">K-FI</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Landing</Nav.Link>
                    <Nav.Link href="/compare">Compare</Nav.Link>
                    <Nav.Link href="/time">Time</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default BasicNavbar  ;