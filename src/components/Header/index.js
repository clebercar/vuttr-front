import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'

import './styles.css';
import { 
    Navbar, 
    Nav,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar className="header" bg="light" expand="lg">
        <LinkContainer to="/">
            <Navbar.Brand>Vuttr</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <LinkContainer to="/create">
                    <Nav.Link>Adicionar</Nav.Link>
                </LinkContainer>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
  );
}
