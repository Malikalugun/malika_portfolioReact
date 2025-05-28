import React, { Component, Fragment } from 'react'
import Blogimg1 from "../../assets/images/1.jpg"
import Blogimg2 from "../../assets/images/2.jpg"
import Blogimg3 from "../../assets/images/3.jpg"
import Blogimg4 from "../../assets/images/4.jpg"
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export class Blogs extends Component {
render() {
return (
<Fragment>
   <div className="blog-section">
      <Container>
         <div className="headline">
            <h2>From my <br />blog post</h2>
         </div>
         <Row>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
            <div className="blog-card">
               <Row>
                  <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                  <div className="blog-cont">
                     <div>
                        <ul>
                           <li>
                              John Smith
                           </li>
                           <li>
                              02 June, 2022 
                           </li>
                        </ul>
                        <h3>
                           Diversification of digital marketing stategies
                        </h3>
                        <Link to="#" className='readBtn'>
                        Read More <i class="fa-solid fa-arrow-right"></i></Link>
                     </div>
                  </div>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                  <div className="blog-img">
                     <img src={Blogimg1} alt="blog"/>
                  </div>
                  </Col>
               </Row>
            </div>
            </Col>
          <Col xl={6} lg={6} md={12} sm={12} xs={12}>
            <div className="blog-card">
               <Row>
                  <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                  <div className="blog-cont">
                     <div>
                        <ul>
                           <li>
                              John Smith
                           </li>
                           <li>
                              02 June, 2022 
                           </li>
                        </ul>
                        <h3>
                           Diversification of digital marketing stategies
                        </h3>
                        <Link to="#" className='readBtn'>
                        Read More <i class="fa-solid fa-arrow-right"></i></Link>
                     </div>
                  </div>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                  <div className="blog-img">
                     <img src={Blogimg2} alt="blog"/>
                  </div>
                  </Col>
               </Row>
            </div>
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
            <div className="blog-card">
               <Row>
                  <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                  <div className="blog-cont">
                     <div>
                        <ul>
                           <li>
                              John Smith
                           </li>
                           <li>
                              02 June, 2022 
                           </li>
                        </ul>
                        <h3>
                           Diversification of digital marketing stategies
                        </h3>
                        <Link to="#" className='readBtn'>
                        Read More <i class="fa-solid fa-arrow-right"></i></Link>
                     </div>
                  </div>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                  <div className="blog-img">
                     <img src={Blogimg3} alt="blog"/>
                  </div>
                  </Col>
               </Row>
            </div>
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
            <div className="blog-card">
               <Row>
                  <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                  <div className="blog-cont">
                     <div>
                        <ul>
                           <li>
                              John Smith
                           </li>
                           <li>
                              02 June, 2022 
                           </li>
                        </ul>
                        <h3>
                           Diversification of digital marketing stategies
                        </h3>
                        <Link to="#" className='readBtn'>
                        Read More <i class="fa-solid fa-arrow-right"></i></Link>
                     </div>
                  </div>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                  <div className="blog-img">
                     <img src={Blogimg4} alt="blog"/>
                  </div>
                  </Col>
               </Row>
            </div>
            </Col>
         </Row>
      </Container>
   </div>
</Fragment>
)
}
}
export default Blogs