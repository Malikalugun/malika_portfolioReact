import React, { Component, Fragment } from 'react'
import { Container,Row,Col,Navbar } from 'react-bootstrap';
import Logo from "../assets/images/logo.png"
import Menubar from '../assets/images/menubar.png'
export class NavbarMobile extends Component {
  render() {
    return (
     <Fragment>
    <div className="navbar-mobile-section">
            <Container>
            <Row>
                <Col xl={8} lg={8} md={6} sm={6} xs={6}>
            <Navbar.Brand to="#home"><img src={Logo} alt="Logo" /></Navbar.Brand>
                </Col>
                <Col xl={4} lg={4} md={6} sm={6} xs>
                
                <div className="mobile-menubar">
                    <img src={Menubar} alt="Menubar" />
                </div>
                </Col>
            </Row>
        </Container>
    </div>
     </Fragment>
    );
  }
}

export default NavbarMobile
