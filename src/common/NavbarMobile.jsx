import React, { Component, Fragment } from "react";
import { Container, Row, Col, Navbar, Button } from "react-bootstrap";
import Logo from "../assets/images/logo.png";

export class NavbarMobile extends Component {
  constructor() {
    super();
    this.state = {
      SideNavState: "sideNavClose",
      ContentOverState: "ContentOverlayClose",
    };
  }

  MenuBarClickHandler = () => {
    this.SideNavOpenClose();
  };

  ContentOverlayClickHandler = () => {
    this.SideNavOpenClose();
  };

  SideNavOpenClose = () => {
    let { SideNavState } = this.state;
    if (SideNavState === "sideNavOpen") {
      this.setState({
        SideNavState: "sideNavClose",
        ContentOverState: "ContentOverlayClose",
      });
    } else {
      this.setState({
        SideNavState: "sideNavOpen",
        ContentOverState: "ContentOverlayOpen",
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div className="navbar-mobile-section">
          <Container>
            <Row>
              <Col xl={8} lg={8} md={6} sm={6} xs={6}>
                <Navbar.Brand href="#home">
                  <img src={Logo} alt="Logo" />
                </Navbar.Brand>
              </Col>
              <Col xl={4} lg={4} md={6} sm={6} xs={6}>
                <div className="mobile-menubar">
                  <Button onClick={this.MenuBarClickHandler}>
                    <i className="fa fa-bars"></i>
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
          <div className={this.state.SideNavState}></div>
          <div
            onClick={this.ContentOverlayClickHandler}
            className={this.state.ContentOverState}
          ></div>
        </div>
      </Fragment>
    );
  }
}

export default NavbarMobile;
