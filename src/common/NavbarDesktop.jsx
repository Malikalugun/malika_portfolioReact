import React, { Component, Fragment } from 'react'
import { Container } from 'react-bootstrap';
import { Navbar,Nav } from 'react-bootstrap';
import Logo from "../assets/images/logo.png"
export class NavbarDesktop extends Component {
  render() {
    return (
     <Fragment>
        <Container fluid={true}>
        <Navbar className='navbarbg'>
        <Container>
          <Navbar.Brand to="#home"><img src={Logo} alt="" /></Navbar.Brand>
          <Nav className="justify-content-end navbarmenu">
            <Nav.Link to="#home">Home</Nav.Link>
            <Nav.Link to="#features">About Us</Nav.Link>
            <Nav.Link to="#pricing">Service</Nav.Link>
             <Nav.Link to="#pricing">Portfolio</Nav.Link>
              <Nav.Link to="#pricing">Blogs</Nav.Link>
               <Nav.Link to="#pricing">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </Container>
     </Fragment>
    );
  }
}

export default NavbarDesktop