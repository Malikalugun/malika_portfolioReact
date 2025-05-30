import React, { useState, Fragment } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import reactjs from '../../assets/images/reactjs.png';
import laravel from '../../assets/images/laravel.png';
import javascript from '../../assets/images/javascript.png'
import tailwind from '../../assets/images/tailwindcss.png';
import html from '../../assets/images/html.png';
import css from '../../assets/images/css.png';
import photopea from '../../assets/images/photopea.png';
import figma from '../../assets/images/figma.png';
import bootstrap from '../../assets/images/bootstrap.png';
function Expert() {
const [activeTab, setActiveTab] = useState('home');
return (
<Fragment>
   <Container>
      <div className="expert-section">
         <Row>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
            <div className="leftexpert">
               <div>
                  <div className="headline">
                     <h2><span>My expert</span><br />Area</h2>
                  </div>
                  <p className='aboutpara'>I specialize in full-stack development using Laravel and React.js. I build responsive, user-friendly websites with HTML, CSS, Tailwind, Bootstrap, AJAX, and Axios, and integrate APIs for dynamic functionality.</p>
                  <p className='aboutpara'>I also work with WordPress for theme customization and plugin integration. I convert Figma and Photopea designs into clean interfaces, manage databases with MySQL, and use Git for version control and collaboration.</p>
                  <a className="helloBtn" href="/" data-discover="true">My Resume <i class="fa-solid fa-file"></i></a>
               </div>
            </div>
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
            <div className="right-expert">
               <Nav
                  justify
                  variant="tabs"
                  activeKey={activeTab}
                  onSelect={(selectedKey) =>
                  setActiveTab(selectedKey)}
                  >
                  <Nav.Item>
                     <Nav.Link eventKey="home" className='expertBtn'>Skill <i class="fa-solid fa-arrow-right"></i></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                     <Nav.Link eventKey="link-1" className='expertBtn'>Experience <i class="fa-solid fa-arrow-right"></i></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                     <Nav.Link eventKey="link-2" className='expertBtn'>Education <i class="fa-solid fa-arrow-right"></i></Nav.Link>
                  </Nav.Item>
               </Nav>
               <div className="tab-content tabcontent-section">
                  {activeTab === 'home' && 
                  <div>
                     <Row>
                        <Col xl={4} lg={4} md={6} sm={6} xs={6}>
                        <div className="tabcont">
                           <div>
                              <div className="expert-icon">
                                
                                 <img src={reactjs} alt="React" />
                              </div>
                              <h5>React Js <span></span></h5>
                           </div>
                        </div>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={6} xs={6}>
                        <div className="tabcont">
                           <div>
                              <div className="expert-icon">
                                 <img src={laravel} alt="Laravel" />
                              </div>
                              <h5>Laravel<span></span></h5>
                           </div>
                        </div>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={6} xs={6}>
                        <div className="tabcont">
                           <div>
                              <div className="expert-icon">
                                 <img src={javascript} alt="javascript" />
                              </div>
                              <h5>JavaScript <span></span></h5>
                           </div>
                        </div>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={6} xs={6}>
                        <div className="tabcont">
                           <div>
                              <div className="expert-icon">
                                 <img src={tailwind} alt="" />
                              </div>
                              <h5>Tailwind Css <span></span></h5>
                           </div>
                        </div>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={6} xs={6}>
                        <div className="tabcont">
                           <div>
                              <div className="expert-icon">
                                 <img src={html} alt="" />
                              </div>
                              <h5>Html <span></span></h5>
                           </div>
                        </div>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={6} xs={6}>
                        <div className="tabcont">
                           <div>
                              <div className="expert-icon">
                                 <img src={css} alt="" />
                              </div>
                              <h5>CSS <span></span></h5>
                           </div>
                        </div>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={6} xs={6}>
                        <div className="tabcont">
                           <div>
                              <div className="expert-icon">
                                 <img src={photopea} alt="photopea" />
                              </div>
                              <h5>Photopea <span></span></h5>
                           </div>
                        </div>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={6} xs={6}>
                        <div className="tabcont">
                           <div>
                              <div className="expert-icon">
                                 <img src={bootstrap} alt="" />
                              </div>
                              <h5>Bootstrap <span></span></h5>
                           </div>
                        </div>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={6} xs={6}>
                        <div className="tabcont">
                           <div>
                              <div className="expert-icon">
                                 <img src={figma} alt="" />
                              </div>
                              <h5>figma <span></span></h5>
                           </div>
                        </div>
                        </Col>
                     </Row>
                  </div>
                  }
                  {activeTab === 'link-1' && 
                  <div>
                     <div className="pastexperience">
                        <Row>
                           <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                           <div className="pastList">
                              <p className='pastdate'>2022 - Present</p>
                              <p className='comname'>Tripledots Software Services Pvt. Ltd</p>
                              <span>-----</span>
                              <h4>Web Developer</h4>
                              <h6>Tripledots Software Services Pvt. Ltd.</h6>
                              <em>
                                 March 1, 2022 – Present
                              </em>
                              <h6>Ranchi, Jharkhand (or your location)</h6>
                              <ul>
                                 <li>
                                    Developed and maintained dynamic web applications using <strong>Laravel</strong>, <strong>React.js</strong>, and <strong>WordPress</strong>
                                 </li>
                                 <li>
                                    Built reusable and responsive UI components with <strong>Tailwind CSS, Bootstrap, HTML,</strong> and <strong>CSS</strong>
                                 </li>
                                  <li>
                                 Integrated third-party and custom-built <strong>REST APIs</strong> using <strong>AJAX</strong> and <strong>Axios</strong>
                              </li>
                              <li>
                                 Collaborated with UI/UX designers to convert mockups from <strong>Figma</strong> and <strong>Photopea</strong> into fully responsive websites
                              </li>
                              <li>
                                 Optimized websites for performance, cross-browser compatibility, and mobile responsiveness
                              </li>
                              <li>
                                 Worked closely with backend teams to implement business logic and improve system efficiency
                              </li>
                              <li>
                                 Contributed to multiple client projects, ensuring timely delivery and high code quality
                              </li>
                              </ul>
                           </div>
                           </Col>
                           
                           
                        </Row>
                     </div>
                  </div>
                  }
                  {activeTab === 'link-2' && 
                  <div>
                     <div className="pastexperience">
                        <Row>
                           <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                           <div className="pastList">
                              <p className='pastdate'>2013 - Central Board of Secondary Education(CBSE)</p>
                              <p className='comname'>10 <sup>th</sup></p>
                              <span>-----</span>
                              <h4>L.K.C Roy Memorial Ranchi</h4>
                           </div>
                           </Col>
                           <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                           <div className="pastList">
                              <p className='pastdate'>2015 - Jharkhand Academic Council(JAC)</p>
                              <p className='comname'>12 <sup>th</sup></p>
                              <span>-----</span>
                              <h4>Ursuline Intermediate College , Ranchi</h4>
                           </div>
                           </Col>
                           <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                           <div className="pastList">
                              <p className='pastdate'>2019 - Private Board</p>
                              <p className='comname'>Graduation</p>
                              <span>-----</span>
                              <h4>Centurion University of Technology and Management (CUTM),Odisha</h4>
                           </div>
                           </Col>
                          
                        </Row>
                     </div>
                  </div>
                  }
               </div>
            </div>
            </Col>
         </Row>
      </div>
   </Container>
</Fragment>
);
}
export default Expert;