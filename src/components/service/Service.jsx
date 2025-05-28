import React, { Component, Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
export class Service extends Component {
  render() {
    return (
    <Fragment>
        
        <div className="service-section">
            <Container>
 <div className="headline">
            <h2>Services <br />I Provide</h2>
        </div>
     <div className="service-content" style={{ borderTop: '1px solid #000' }}>
            <Row>
               <Col xl={3} lg={3} md={3} sm={12} xs={12}>
               <div className="servicenum">
                <ul>
                    <li className='snum'>01</li>
                    <li>
                       <h4>UI/UX Design</h4> 
                    </li>
                </ul>
               </div>
               </Col> 
                <Col xl={7} lg={7} md={7} sm={10} xs={10}>
                <div className="servicepara">
                    <p>Orido is a leading web design agency with an award-winning design team that creates innovative, effective</p></div></Col> 
                 <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                 <div className="service-icon">
                    <i class="fa-solid fa-arrow-right"></i>
                 </div>
                 </Col> 
            </Row>
        </div>
         <div className="service-content">
            <Row>
               <Col xl={3} lg={3} md={3} sm={12} xs={12}>
               <div className="servicenum">
                <ul>
                    <li className='snum'>02</li>
                    <li>
                       <h4>User Research</h4> 
                    </li>
                </ul>
               </div>
               </Col> 
                <Col xl={7} lg={7} md={7} sm={10} xs={10}>
                <div className="servicepara">
                    <p>Orido is a leading web design agency with an award-winning design team that creates innovative, effective</p></div></Col> 
                 <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                 <div className="service-icon">
                    <i class="fa-solid fa-arrow-right"></i>
                 </div>
                 </Col> 
            </Row>
        </div>
         <div className="service-content">
            <Row>
               <Col xl={3} lg={3} md={3} sm={12} xs={12}>
               <div className="servicenum">
                <ul>
                    <li className='snum'>03</li>
                    <li>
                       <h4>UI Animation</h4> 
                    </li>
                </ul>
               </div>
               </Col> 
                <Col xl={7} lg={7} md={7} sm={10} xs={10}>
                <div className="servicepara">
                    <p>Orido is a leading web design agency with an award-winning design team that creates innovative, effective</p></div></Col> 
                 <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                 <div className="service-icon">
                    <i class="fa-solid fa-arrow-right"></i>
                 </div>
                 </Col> 
            </Row>
        </div>
         <div className="service-content">
            <Row>
               <Col xl={3} lg={3} md={3} sm={12} xs={12}>
               <div className="servicenum">
                <ul>
                    <li className='snum'>04</li>
                    <li>
                       <h4>Product Design</h4> 
                    </li>
                </ul>
               </div>
               </Col> 
                <Col xl={7} lg={7} md={7} sm={10} xs={10}>
                <div className="servicepara">
                    <p>Orido is a leading web design agency with an award-winning design team that creates innovative, effective</p></div></Col> 
                 <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                 <div className="service-icon">
                    <i class="fa-solid fa-arrow-right"></i>
                 </div>
                 </Col> 
            </Row>
        </div>
        </Container>
        </div>
    </Fragment>
    )
  }
}

export default Service