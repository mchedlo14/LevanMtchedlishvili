import React from 'react'
import  {Navbar,Nav,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import SelectTheme from './SelectTheme';


const NavbarComp = () => {
  return (
    <div>
      {" "}
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
              <Nav.Link href="#pricing">About</Nav.Link>
            </Link>
            <Link to='/contact' style={{ textDecoration: 'none' }}>
              <Nav.Link href="#deets">Contact</Nav.Link>
            </Link>
          </Nav>
          <SelectTheme />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavbarComp