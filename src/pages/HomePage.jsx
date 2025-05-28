import React, { Component, Fragment } from 'react'
import Home from "../components/home/Home";
import About from '../components/about/About';
import NavbarDesktop from '../common/NavbarDesktop';
import Expert from '../components/expert/Expert';
import Countsection from '../components/count/Countsection';
import Footer from '../common/Footer';
import Partner from '../components/partner/Partner';
import Service from '../components/service/Service';
import Projects from '../components/projects/Projects';
import Testimonial from '../components/testimonial/Testimonial';
import Blogs from '../components/blogs/Blogs';
import NavbarMobile from '../common/NavbarMobile';

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div className="desktopmenu d-none d-lg-block">
        <NavbarDesktop/>
        </div>
        <div className="mobilemenu d-block d-lg-none">
        <NavbarMobile/>
        </div>
       <Home/>
        <About/>
        <Expert/>
        <Countsection/>
        <Service/>
        <Projects/>
        <Testimonial/>
        <Blogs/>
        <Partner/>
        <Footer/>
      </Fragment>
    )
  }
}

export default HomePage