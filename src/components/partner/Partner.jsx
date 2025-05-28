import React, { Component, Fragment } from 'react'
import Slider from "react-slick";
import { Container } from 'react-bootstrap';
import partner1 from "../../assets/images/1.png";
import partner2 from "../../assets/images/2.png";
import partner3 from "../../assets/images/3.png";
import partner4 from "../../assets/images/4.png";
import partner5 from "../../assets/images/5.png";
import partner6 from "../../assets/images/6.png";
import partner7 from "../../assets/images/7.png";
export class Partner extends Component {
    
  render() {
//      var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
 var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
         {
          breakpoint: 1440,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
         {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
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
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Fragment>
        <Container>
        <div className="partner-content">
          <Slider {...settings} className='slider-section'>
      <div>
        <img src={partner1} alt="partner logo" className='partnerimg'/>
      </div>
      <div>
      <img src={partner2} alt="partner logo" className='partnerimg'/>
      </div>
      <div>
       <img src={partner3} alt="partner logo" className='partnerimg'/>
      </div>
      <div>
       <img src={partner4} alt="partner logo" className='partnerimg'/>
      </div>
      <div>
        <img src={partner5} alt="partner logo" className='partnerimg'/>
      </div>
      <div>
        <img src={partner6} alt="partner logo" className='partnerimg'/>
      </div>
      <div>
        <img src={partner7} alt="partner logo" className='partnerimg'/>
      </div>
    </Slider>
        </div>

        </Container>
      </Fragment>
    );
  }
}

export default Partner