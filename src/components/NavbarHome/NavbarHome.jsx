import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavbarHome.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

function NavbarHome() {
  const user = useSelector((state) => {
    console.log("userlogged in", state.signReducer);
    return state.signReducer;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <Navbar expand="sm" className=" p-2 navbar-background">
        <Navbar.Brand href="#home" className="navbar-color">
          <img className="logo-color" src="shopping-cart.png"></img>SHOP CART
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end padding-right"
        >
          <Nav className="navbar-right-section">
            <Nav.Link
              as={NavLink}
              to="/"
              className="navbar-word-color-home hover-underline-animation"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/cart"
              className="navbar-word-color-home hover-underline-animation"
            >
              Cart
              <i className="fa fa-cart-arrow-down" />
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/favourite"
              className="navbar-word-color-home hover-underline-animation"
            >
              WishList
              <i className="fa fa-heart" />
            </Nav.Link>
            {user.userId ? (
              <>
                <img
                  src={user.image && user.image}
                  width="35px"
                  height="35px"
                  className=" ms-2 rounded-circle"
                />
                <NavDropdown
                  title={user.userId && user.userId}
                  id="basic-nav-dropdown"
                  className="hover-underline-animation logout-font"
                >
                  <NavDropdown.Item
                    onClick={() => {
                      dispatch(signOut(user));
                      navigate("/");
                    }}
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <Nav.Link
                  as={NavLink}
                  to="/signup"
                  className="navbar-word-color-sign-up hover-underline-animation"
                >
                  Sign Up
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/signin"
                  className="navbar-word-color-sign-in  hover-underline-animation"
                >
                  Sign In
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarHome;
