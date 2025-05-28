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
            <p>“Awesome website! Easy to use and edit, it has a lot of options to design whatever you need, it is professional and fun. I was very successful creating my profile using designer which gave me unbelievable reach & appreciation.”</p>
            <h5>Albert Walkers</h5>
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