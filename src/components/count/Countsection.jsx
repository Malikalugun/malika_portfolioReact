import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
export class Countsection extends Component {
  render() {
    return (
   <Fragment>
    <Container>
        
        <div className="countsection">
           <div className="headline">
                     <h2>My Works</h2>
                  </div>
          <Row>
            <Col xl={3} lg={3} md={4} sm={6} xs={6}>
            <div className="countCard">
            
          <div className="countNum">
              <h3>  <CountUp end={4} duration={2} /></h3>
          </div>
                <p>E-commerce</p>
            </div>
            </Col>
             <Col xl={3} lg={3} md={4} sm={6} xs={6}>
            <div className="countCard">
            
          <div className="countNum">
              <h3>  <CountUp end={6} duration={2} /></h3>
          </div>
                <p>Eduction</p>
            </div>
            </Col>
             <Col xl={3} lg={3} md={4} sm={6} xs={6}>
            <div className="countCard">
            
          <div className="countNum">
              <h3>  <CountUp end={3} duration={2} /></h3>
          </div>
                <p>NGO</p>
            </div>
            </Col>
             <Col xl={3} lg={3} md={4} sm={6} xs={6}>
            <div className="countCard">
            
          <div className="countNum">
              <h3>  <CountUp end={20} duration={2} /></h3>
          </div>
                <p>Other</p>
            </div>
            </Col>
        </Row>
        </div>
    </Container>
   </Fragment>
    );
  }
}

export default Countsection