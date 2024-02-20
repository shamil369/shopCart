import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavbarHome.css'

function NavbarHome() {
  return (
    <div>
        <Navbar expand="sm" className=" p-2 navbar-background">
        
            <Navbar.Brand href="#home" className='navbar-color'><img className="logo-color" src="shopping-cart.png"></img>SHOP CART</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end padding-right" >
            <Nav className="navbar-right-section">
                <Nav.Link href="#home" className='navbar-word-color-home'>Home</Nav.Link>
                
                <Nav.Link href="#link" className='navbar-word-color-cart '>Link</Nav.Link>

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