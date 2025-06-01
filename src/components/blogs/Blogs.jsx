import React, { Component, Fragment } from "react";
import Blogimg1 from "../../assets/images/11.png";
import Blogimg2 from "../../assets/images/22.png";
import Blogimg3 from "../../assets/images/33.png";
import Blogimg4 from "../../assets/images/44.png";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export class Blogs extends Component {
  render() {
    return (
      <Fragment>
        <div className="blog-section">
          <Container>
            <div className="headline">
              <h2>
                From my <br />
                blog post
              </h2>
            </div>
            <Row>
              <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                <div className="blog-card">
                  <Row>
                    <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                      <div className="blog-cont">
                        <div>
                          {/* <ul>
                            <li>John Smith</li>
                            <li>02 June, 2022</li>
                          </ul> */}
                          <h5>Understanding RESTful APIs</h5>
                          <p>
                            Explained the fundamentals of RESTful APIs, how they
                            work, and best practices for integrating APIs with
                            frontend frameworks like React.js to build scalable
                            web applications.
                          </p>
                          {/* <Link to="#" className='readBtn'>
                        Read More <i class="fa-solid fa-arrow-right"></i></Link> */}
                        </div>
                      </div>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                      <div className="blog-img">
                        <img src={Blogimg1} alt="blog" />
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
                          <ul className="d-none">
                            <li>John Smith</li>
                            <li>02 June, 2022</li>
                          </ul>
                          <h5>Building Responsive Layouts with Tailwind CSS</h5>
                          {/* <Link to="#" className="readBtn">
                            Read More <i class="fa-solid fa-arrow-right"></i>
                          </Link> */}
                          <p>
                            Shared practical tips and examples on using Tailwind
                            CSS utility classes to create clean, responsive, and
                            mobile-first designs quickly without writing custom
                            CSS.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                      <div className="blog-img">
                        <img src={Blogimg2} alt="blog" />
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
                          <h5>
                            How to Optimize Web Performance for Faster Load
                            Times
                          </h5>
                          <p>
                            Covered techniques to improve website speed
                            including code splitting, lazy loading, image
                            optimization, and best practices for reducing
                            render-blocking resources.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                      <div className="blog-img">
                        <img src={Blogimg3} alt="blog" />
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
                          <h5>React.js State Management: Hooks vs Redux</h5>
                          <p>
                            Compared React Hooks and Redux for managing state in
                            React applications, highlighting when and why to use
                            each, with code examples and real-world scenarios.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                      <div className="blog-img">
                        <img src={Blogimg4} alt="blog" />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}
export default Blogs;
