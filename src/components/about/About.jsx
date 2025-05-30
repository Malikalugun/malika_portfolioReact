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
          <h2>03</h2>
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
        <p className='aboutpara'>Web Developer with 3 years of experience in creating responsive and dynamic web applications using Laravel and React.js. Skilled in frontend technologies like HTML, CSS, Tailwind CSS, Bootstrap, and experienced in working with APIs using AJAX and Axios. Comfortable turning UI designs from Figma and Photopea into functional websites. Looking for an opportunity to contribute to a skilled development team, take on new challenges, and continue growing as a full-stack developer.</p>
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