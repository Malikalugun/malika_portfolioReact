import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FooterLogo from "../assets/images/video.png"
import Logo from "../assets/images/logo.png"
export class Footer extends Component {
render() {
return (
<Fragment>
   <div className="footer-section">
      <Container>
         <Row className='tfootmenu'>
            <Col xl={3} lg={3} md={6} sm={12} xs={12}>
            <div className="footer-cont">
               <img src={FooterLogo} alt="" className="rotate"/>
               <div className="playicon">
                  <i class="fa-solid fa-play"></i>
               </div>
            </div>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
            <div className="footer-cont">
               <h3>
                  Let's work together
               </h3>
               <p>You can express yourself however you want and whenever you want, for free. You can customize a template or make your own.</p>
            </div>
            </Col>
            <Col xl={3} lg={3} md={12} sm={12} xs={12}>
            <div className="footer-cont">
               <div className="contactlink mb-4">
                  <Link to="#" className='helloBtn'>
                  Say Hello <i class="fa-brands fa-telegram"></i></Link>
               </div>
            </div>
            </Col>
         </Row>
         <Row>
            <Col xl={3} lg={4} md={6} sm={12} xs={12} >
            <div className="footercontact">
               <p>Call:</p>
               <h2>
                  <Link to="tel:7735979503">
                  +91-7735979503</Link>
               </h2>
            </div>
            </Col>
            <Col xl={5} lg={4} md={6} sm={12} xs={12} >
            <div className="footercontact">
               <p>Email:</p>
               <h2>
                  <Link to="mailto:annamalikalugun@gmail.com">
                  annamalikalugun@gmail.com</Link>
               </h2>
            </div>
            </Col>
            <Col xl={4} lg={4} md={6} sm={12} xs={12}>
            <div className="social-icon">
               <h4>Follow us:</h4>
               <ul className='socialmedia'>
                  <li>
                     <Link>
                     <i class="fa-brands fa-facebook-f"></i></Link>
                  </li>
                  <li>
                     <Link to="#">
                     <i class="fa-brands fa-instagram"></i></Link>
                  </li>
                  <li>
                     <Link>
                     <i class="fa-brands fa-youtube"></i></Link>
                  </li>
               </ul>
            </div>
            </Col>
         </Row>
      </Container>
   </div>
   <div className="copyrightsection">
      <Container>
         <ul>
            <li>
               <img src={Logo} alt="" />
            </li>
            <li>
               <p>© 2025 by Malika. All Rights Reserved</p>
            </li>
         </ul>
      </Container>
   </div>
</Fragment>
);
}
}
export default Footer