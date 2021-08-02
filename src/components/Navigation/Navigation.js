import React from 'react';
import { useState } from 'react';
import { Navbar,Nav, NavDropdown } from 'react-bootstrap'
import logo from '../../images/logo-2-test-01.png'

const Navigation = () => {
  
const [show, setShow] = useState(false);
const showDropdown = (e)=>{
    setShow(!show);
}
const hideDropdown = e => {
    setShow(false);
}
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"><img src={logo} alt="" /> </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <NavDropdown title="Courses" 
   show={show}
   onMouseEnter={showDropdown} 
   onMouseLeave={hideDropdown}>
                    <NavDropdown.Item href="#action/3.1">Course 1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Course 2</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Course 3</NavDropdown.Item>
                </NavDropdown>
      <Nav.Link href="#link">About</Nav.Link>
      <Nav.Link href="#link">Blog</Nav.Link>
      <Nav.Link href="#link">Contact Us</Nav.Link>
     
    </Nav>
  
  </Navbar.Collapse>
</Navbar>
       
    );
};

export default Navigation;