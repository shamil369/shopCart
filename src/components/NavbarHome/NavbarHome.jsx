import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavbarHome.css'
import { NavLink } from 'react-router-dom';

function NavbarHome() {
  return (
    <div>
        <Navbar expand="sm" className=" p-2 navbar-background">
        
            <Navbar.Brand href="#home" className='navbar-color'><img className="logo-color" src="shopping-cart.png"></img>SHOP CART</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end padding-right" >
            <Nav className="navbar-right-section">
                <Nav.Link as={NavLink} to="/" className='navbar-word-color-home hover-underline-animation'>Home</Nav.Link>
                
                <Nav.Link as={NavLink} to="/signin" className='navbar-word-color-sign-in  hover-underline-animation '>Sign In</Nav.Link>
                <Nav.Link as={NavLink} to="/signup" className='navbar-word-color-sign-up hover-underline-animation'>Sign Up</Nav.Link>

                <NavDropdown title="Logout" id="basic-nav-dropdown" className="hover-underline-animation logout-font">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        
        </Navbar>
    </div>
  )
}

export default NavbarHome