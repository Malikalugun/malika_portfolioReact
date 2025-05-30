import React, { Component, Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Profile from '../../assets/images/profile.png'
export class Testimonial extends Component {
  render() {
    return (
      <Fragment>
        <div className="testimonial-section">
            <Container>
 <div className="tetimonial-content">
  <div className="headline">
            <h2>Valuable feedback <br />from my client</h2>
        </div>
        <Row>
          <Col xl={3}lg={3} md={3} sm={12} xs={12}>
          <div className="testi-profile">
            <img src={Profile} alt="profile" />
          </div>
          </Col>
           <Col xl={9}lg={9} md={9} sm={12} xs={12}>
           <div className="procont">
           <p>
  Working with <strong>teams</strong> has been a fantastic experience. He consistently delivers high-quality, responsive websites on time. His expertise in <strong>Laravel</strong>, <strong>React</strong>, and <strong>WordPress</strong> helped bring our ideas to life with clean, scalable code. <em>Highly recommended</em> for any web development needs!
</p>

            <h5>Albert </h5>
            <p className='test-des'>Vivaco Group</p>
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

export default Testimonial