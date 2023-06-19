import React from "react";
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarStore = () => {
    return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand>
        <Link to={"../Login"}>
         STORE GROUP ONE
        </Link>
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"} className="me-2">Home</Link>
            <Link to={"../Products"} className="me-2">Products</Link>
            <Link to={"../Cart"} className="me-2">Cart</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </>

    );
}

export default NavbarStore;