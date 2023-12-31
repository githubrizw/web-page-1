import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react'

const TopNav = () => {
  return (
    <div>
          <Navbar className='navbar' expand="lg">
      <Container>
        <Navbar.Brand href="#home">Title</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
   
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
   
    </div>
  )
}

export default TopNav;
