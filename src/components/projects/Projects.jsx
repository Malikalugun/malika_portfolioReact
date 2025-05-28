import React, { Component, Fragment } from 'react'
import Slider from "react-slick";
import { Container } from 'react-bootstrap';
import Project from "../../assets/images/project.jpg"
import Project1 from "../../assets/images/project1.webp"
import Project2 from "../../assets/images/project2.webp"
export class Projects extends Component {
  render() {
     var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: true,
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
     <Fragment>
        <div className="project-section">
            <Container>
 <div className="headline">
            <h2>Look at my <br />recent projects</h2>
        </div>
<div className="project-cont">

    <Slider {...settings} className='slider-section'>
      <div>
       <div className="project-card">
         <img src={Project} alt="partner logo" className='partnerimg'/>
         <p>Popup</p>
         <h3>Felix Photo</h3>
       </div>
      </div>
      <div>
        <div className="project-card">
      <img src={Project1} alt="partner logo" className='partnerimg'/>
       <p>Youtube</p>
         <h3>Car Export</h3>
      </div>
      </div>
      <div>
        <div className="project-card">
       <img src={Project2} alt="partner logo" className='partnerimg'/>
        <p>Vimeo</p>
         <h3>Food delivery</h3>
      </div>
      </div>
      <div>
        <div className="project-card">
       <img src={Project2} alt="partner logo" className='partnerimg'/>
        <p>Soundcloud</p>
         <h3>Ecommerce Website</h3>
      </div>
      </div>
      <div>
        <div className="project-card">
        <img src={Project} alt="partner logo" className='partnerimg'/>
         <p>Details</p>
         <h3>Mockup Phone</h3>
      </div>
      </div>
      <div>
        <div className="project-card">
        <img src={Project1} alt="partner logo" className='partnerimg'/>
         <p>Popup</p>
         <h3>Felix Photo</h3>
      </div>
      </div>
      <div>
        <div className="project-card">
        <img src={Project} alt="partner logo" className='partnerimg'/>
         <p>Vimeo</p>
         <h3>Food delivery</h3>
      </div>
      </div>
    </Slider>
</div>
        </Container>
        </div>
     </Fragment>
    );
  }
}

export default Projects