import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar as BNavbar } from 'react-bootstrap';
import { FaHeartbeat, FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <BNavbar expand="lg" className="custom-navbar">
      <Container>
        <BNavbar.Brand as={Link} to="/">
          <FaHeartbeat style={{ color: '#E02B59', marginRight: '10px' }} />
          Ecommerce Saludable
        </BNavbar.Brand>
        <BNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/catalog">Catálogo</Nav.Link>
            <Nav.Link as={Link} to="/login">
              <FaUser className="me-1" /> Ingresar
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <FaShoppingCart className="me-1" /> Carrito
            </Nav.Link>
          </Nav>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
};

export default Navbar;