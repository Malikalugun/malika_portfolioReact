import React, { Component, Fragment } from 'react';
import {Row,Col,Container} from "react-bootstrap";
import { Link } from 'react-router-dom';
export class Home extends Component {
render() {
return (
<Fragment>
   <Container>
      <div className="herosection">
         <Row>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
         <div className="leftherosection">
            <div>
               <div className="head-name">
               <div className='name-icon'>
                  <h3>Hey Malika</h3>
                  <img src="https://cdn-icons-png.flaticon.com/128/16446/16446412.png" alt="hey icon" />
               </div>
            </div>
            <div className="subhead">
               Visual Designer
            </div>
            <p className="portpara">
               I'm creative designer based in New York, and I'm very passionate and dedicated to my work.
            </p>
            <div className="contactlink mb-4">
               <Link to="#" className='helloBtn'>Say Hello <i class="fa-brands fa-telegram"></i></Link>
               <Link to="#" className='workBtn'>My Work <i class="fa fa-arrow-right"></i></Link>
            </div>
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
            </div>
         </div>
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
            <div className="heroimg">
               <img src="https://orido-t-next.vercel.app/assets/img/hero/1.jpg" alt="hero" />
            </div>
            </Col>
         </Row>
      </div>
   </Container>
</Fragment>
)
}
}
export default Home