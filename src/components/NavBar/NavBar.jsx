import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function NavBar(){
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
            <Link to="/" class="navmain">Covid</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link class="nav-link">
              <CustomLink to="/book" class="nav-link">Book Vaccination</CustomLink>
            </Nav.Link>
            <Nav.Link class="nav-link">
              <CustomLink to="/location" class="nav-link">Add / remove Centres</CustomLink>
            </Nav.Link>
            <Nav.Link class="nav-link">
              <CustomLink to="/view" class="nav-link">view registrations</CustomLink>
            </Nav.Link>
          </Nav>
          <Nav>
          <Navbar.Text className='loginStuff'>
            Signed in as : <p className='userName'> john </p>
            <CustomLink to="/login" class="nav-link loginBtn"> Log-in </CustomLink>
          </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

function CustomLink({to, children, ...props}){
  
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})

  return (
    <li className={ isActive === to ? 'active' : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}