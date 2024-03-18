import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const StyledNavLink = styled(Nav.Link)`
  &&& {
    background-color: transparent;
    color: white; /* Change the color to match the rest of the links */
    text-decoration: none; /* Remove underline */
    padding: 0.5rem 1rem; /* Adjust padding to match */
    margin: 0 0.5rem; /* Adjust margin to match */
    transition: color 0.3s ease; /* Add transition for smooth color change */
  }

  &&&:hover {
    color: lightgray; /* Change color on hover */
  }
`


export function NavBar({setClicked}) {

  return (
    <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/home" onClick={() => setClicked(false)}>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <StyledNavLink as={Link} to="/about" onClick={() => setClicked(true)}>About</StyledNavLink>
            <StyledNavLink href="#pricing">Portfolio</StyledNavLink>
          </Nav>
          <Nav>
            <StyledNavLink href="#deets">Services</StyledNavLink>
            <StyledNavLink eventKey={2} href="#memes">Appointment</StyledNavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;