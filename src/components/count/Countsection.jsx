import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
export class Countsection extends Component {
  render() {
    return (
   <Fragment>
    <Container>
        
        <div className="countsection">
          <Row>
            <Col xl={3} lg={3} md={4} sm={6} xs={6}>
            <div className="countCard">
            
          <div className="countNum">
              <h3>  <CountUp end={219} duration={2} /></h3>
          </div>
                <p>Training</p>
            </div>
            </Col>
             <Col xl={3} lg={3} md={4} sm={6} xs={6}>
            <div className="countCard">
            
          <div className="countNum">
              <h3>  <CountUp end={250} duration={2} /></h3>
          </div>
                <p>Written Book</p>
            </div>
            </Col>
             <Col xl={3} lg={3} md={4} sm={6} xs={6}>
            <div className="countCard">
            
          <div className="countNum">
              <h3>  <CountUp end={150} duration={2} /></h3>
          </div>
                <p>Listeners</p>
            </div>
            </Col>
             <Col xl={3} lg={3} md={4} sm={6} xs={6}>
            <div className="countCard">
            
          <div className="countNum">
              <h3>  <CountUp end={200} duration={2} /></h3>
          </div>
                <p>Own Projects</p>
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