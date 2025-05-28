import React, { useState, Fragment } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
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
                  <p className='aboutpara'>You can express yourself however you want and whenever you want, for free. You can customize a template or make your own from scratch, with an immersive library at your disposal. You can express yourself however you want and whenever you free.</p>
                  <p className='aboutpara'>You can customize a template or make your own from scratch, with an immersive library at your disposal.</p>
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
                                 {/* <i class="fa-brands fa-figma"></i> */}
                                 <img src="https://cdn-icons-png.flaticon.com/128/5968/5968705.png" alt="" />
                              </div>
                              <h5>Figma <span> (90%)</span></h5>
                           </div>
                        </div>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={6} xs={6}>
                        <div className="tabcont">
                           <div>
                              <div className="expert-icon">
                                 <img src="https://cdn-icons-png.flaticon.com/128/5968/5968428.png" alt="" />
                              </div>
                              <h5>After Effect<span> (80%)</span></h5>
                           </div>
                        </div>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={6} xs={6}>
                        <div className="tabcont">
                           <div>
                              <div className="expert-icon">
                                 <img src="https://cdn-icons-png.flaticon.com/128/5968/5968520.png" alt="" />
                              </div>
                              <h5>Photoshop <span> (85%)</span></h5>
                           </div>
                        </div>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={6} xs={6}>
                        <div className="tabcont">
                           <div>
                              <div className="expert-icon">
                                 <img src="https://cdn-icons-png.flaticon.com/128/5611/5611129.png" alt="" />
                              </div>
                              <h5>XD <span> (95%)</span></h5>
                           </div>
                        </div>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={6} xs={6}>
                        <div className="tabcont">
                           <div>
                              <div className="expert-icon">
                                 <img src="https://cdn-icons-png.flaticon.com/128/5968/5968522.png" alt="" />
                              </div>
                              <h5>Illustrator <span> (90%)</span></h5>
                           </div>
                        </div>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={6} xs={6}>
                        <div className="tabcont">
                           <div>
                              <div className="expert-icon">
                                 <img src="https://cdn-icons-png.flaticon.com/128/5968/5968535.png" alt="" />
                              </div>
                              <h5>Indesign <span> (75%)</span></h5>
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
                           <Col xl={4} lg={6} md={6} sm={6} xs={6}>
                           <div className="pastList">
                              <p className='pastdate'>2021 - Present</p>
                              <p className='comname'>Bauen Software Inc.</p>
                              <span>-----</span>
                              <h4>Product Designer</h4>
                           </div>
                           </Col>
                           <Col xl={4} lg={6} md={6} sm={6} xs={6}>
                           <div className="pastList">
                              <p className='pastdate'>2021 - Present</p>
                              <p className='comname'>Bauen Software Inc.</p>
                              <span>-----</span>
                              <h4>Product Designer</h4>
                           </div>
                           </Col>
                           <Col xl={4} lg={6} md={6} sm={6} xs={6}>
                           <div className="pastList">
                              <p className='pastdate'>2021 - Present</p>
                              <p className='comname'>Bauen Software Inc.</p>
                              <span>-----</span>
                              <h4>Product Designer</h4>
                           </div>
                           </Col>
                           <Col xl={4} lg={6} md={6} sm={6} xs={6}>
                           <div className="pastList">
                              <p className='pastdate'>2021 - Present</p>
                              <p className='comname'>Bauen Software Inc.</p>
                              <span>-----</span>
                              <h4>Product Designer</h4>
                           </div>
                           </Col>
                           <Col xl={4} lg={6} md={6} sm={6} xs={6}>
                           <div className="pastList">
                              <p className='pastdate'>2021 - Present</p>
                              <p className='comname'>Bauen Software Inc.</p>
                              <span>-----</span>
                              <h4>Product Designer</h4>
                           </div>
                           </Col>
                           <Col xl={4} lg={6} md={6} sm={6} xs={6}>
                           <div className="pastList">
                              <p className='pastdate'>2021 - Present</p>
                              <p className='comname'>Bauen Software Inc.</p>
                              <span>-----</span>
                              <h4>Product Designer</h4>
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
                           <Col xl={4} lg={6} md={6} sm={6} xs={6}>
                           <div className="pastList">
                              <p className='pastdate'>2021 - Present</p>
                              <p className='comname'>Bauen Software Inc.</p>
                              <span>-----</span>
                              <h4>Product Designer</h4>
                           </div>
                           </Col>
                           <Col xl={4} lg={6} md={6} sm={6} xs={6}>
                           <div className="pastList">
                              <p className='pastdate'>2021 - Present</p>
                              <p className='comname'>Bauen Software Inc.</p>
                              <span>-----</span>
                              <h4>Product Designer</h4>
                           </div>
                           </Col>
                           <Col xl={4} lg={6} md={6} sm={6} xs={6}>
                           <div className="pastList">
                              <p className='pastdate'>2021 - Present</p>
                              <p className='comname'>Bauen Software Inc.</p>
                              <span>-----</span>
                              <h4>Product Designer</h4>
                           </div>
                           </Col>
                           <Col xl={4} lg={6} md={6} sm={6} xs={6}>
                           <div className="pastList">
                              <p className='pastdate'>2021 - Present</p>
                              <p className='comname'>Bauen Software Inc.</p>
                              <span>-----</span>
                              <h4>Product Designer</h4>
                           </div>
                           </Col>
                           <Col xl={4} lg={6} md={6} sm={6} xs={6}>
                           <div className="pastList">
                              <p className='pastdate'>2021 - Present</p>
                              <p className='comname'>Bauen Software Inc.</p>
                              <span>-----</span>
                              <h4>Product Designer</h4>
                           </div>
                           </Col>
                           <Col xl={4} lg={6} md={6} sm={6} xs={6}>
                           <div className="pastList">
                              <p className='pastdate'>2021 - Present</p>
                              <p className='comname'>Bauen Software Inc.</p>
                              <span>-----</span>
                              <h4>Product Designer</h4>
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