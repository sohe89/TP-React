import React from "react";
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from "react-redux";

const NavbarStore = () => {
  const {cartTotalQuantity} = useSelector(state=>state.cart);
    return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand>
        <Link to={"/"}>
        La Marca
        </Link>
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="d-flex flex-lg-row justify-content-lg-between align-items-center navbar-nav" id="basic-navbar-nav">
          <Nav className="d-flex w-100 flex-lg-row justify-content-lg-between align-items-center">
            <Link to={"../Products"} className="me-2">Products</Link>
            <Link to={"../Cart"} className="me-2">Cart<span className="badge-light"> {cartTotalQuantity}</span></Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </>

    );
}

export default NavbarStore;