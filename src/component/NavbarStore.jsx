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
    <Navbar >
      <Container>
      <Navbar.Brand>
        
         STORE GROUP ONE
        
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          <Link to={"/Products"} className="me-2">Products</Link> 
            
         
            <Link to={"../Cart"} className="me-2">Cart<span className="badge-light"> {cartTotalQuantity}</span></Link>
            <Link to={"/Register"} className="me-2">Registrarte</Link>
            <Link to={"../Login"} className="me-2">Iniciar Seccion</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </>

    );
}

export default NavbarStore;