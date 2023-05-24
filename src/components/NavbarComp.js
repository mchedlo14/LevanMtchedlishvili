import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import SelectTheme from "./SelectTheme";
import "../assets/NavbarComp.css";
import { Menu, Item } from "burger-menu";
import "burger-menu/lib/index.css";
import { Squash  as Hamburger } from 'hamburger-react'

const NavbarComp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className="navbar-wrapper">
      {/* {" "}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Navbar.Brand href="#home">Levan Mtchedlishvili</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='navbar-collapse'>
          <Nav className="me-auto">
            <Link to='/' style={{ textDecoration: 'none' }}>
              <Nav.Link href="/home">Home</Nav.Link>
            </Link>
            <Link to='/about' style={{ textDecoration: 'none' }}>
              <Nav.Link href="/about">About</Nav.Link>
            </Link>
            <Link to='/timeline' style={{ textDecoration: 'none' }}>
              <Nav.Link href="/timeline">Timeline</Nav.Link>
            </Link>
          </Nav>
          <SelectTheme />
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
      <div className="navbar-container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p>Levan Mtchedlishvili</p>
        </Link>
      
        <div>
        <Hamburger toggled={isOpen} toggle={setIsOpen} color="#ffff" size={25} rounded />

        </div>
        <Menu
          className="burger-menu"
          isOpen={isOpen}
          selectedKey={"entry"}
          onClose={() => setIsOpen(false)}
        >
          <Link to="/">
            <Item itemKey={"manage"} text={"Home"}></Item>
          </Link>
          <Link to="/about">
            <Item itemKey={"manage"} text={"About"}></Item>
          </Link>
          <Link to="/timeline">
            <Item itemKey={"user"} text={"Timeline"}></Item>
          </Link>
          <SelectTheme />
        </Menu>
      </div>
    </div>
  );
};

export default NavbarComp;
