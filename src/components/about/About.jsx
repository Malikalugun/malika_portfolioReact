import React, { Component, Fragment } from 'react'
import { Row,Col, Container } from 'react-bootstrap';
import Signature from "../../assets/images/signature.png"
import { Link } from 'react-router-dom';
export class About extends Component {
  render() {
    return (
      <Fragment>
        <div className="about-section">
<Container>
  
    <Row>
       <Col xl={6} lg={6} md={12} sm={12} xs={12}>
      <div className="rightabout">
        <div className="innerabout">
          <h2>10</h2>
          <div className='year-experience'>Year of Experience</div>
          <div className="aboutname">
            <h3>Malika</h3>
          </div>
        </div>
      </div>
       </Col> 
       <Col xl={6} lg={6} md={12} sm={12} xs={12}>
       <div className="right-about">
        <div>
          <div className="headline">
            <h2>About Me</h2>
        </div>
        <p className='aboutpara'>With 10 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
        <div className="down-sign">
            <Link to="#" className='downloadBtn'>Download CV</Link><img src={Signature} alt="sign" />
        </div>
        </div>
       </div>
       </Col>
    </Row>

</Container>
</div>
      </Fragment>
    );
  }
}

export default About