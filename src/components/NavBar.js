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
    color: red; 
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
  }
`

const StyledSpan = styled.span`
  font-family: 'glitch-goblin-font';
`


export function NavBar({setClicked}) {

  return (
    <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/home" onClick={() => setClicked(false)}><StyledSpan>Home</StyledSpan></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <StyledNavLink as={Link} to="/about" onClick={() => setClicked(true)}><StyledSpan>About</StyledSpan></StyledNavLink>
            <StyledNavLink as={Link} to="/portfolio" onClick={() => setClicked(true)}><StyledSpan>Portfolio</StyledSpan></StyledNavLink>
          </Nav>
          <Nav>
            <StyledNavLink as={Link} to="/services" onClick={() => setClicked(true)}><StyledSpan>Services</StyledSpan></StyledNavLink>
              <StyledNavLink eventKey={2} as={Link} to="https://booksy.com/en-us/143688_chris-blanco-blessedupbarber-studio_barber-shop_36347_los-fresnos"><StyledSpan>Appointment</StyledSpan></StyledNavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;