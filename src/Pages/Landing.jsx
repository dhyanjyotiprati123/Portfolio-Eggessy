import React from 'react'
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import About from "../Components/About";
import Experience from "../Components/Experience";
import Services from "../Components/Services";
import Testimonial from "../Components/Testimonials";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import PortFolio from "../Components/Portfolio";


const Landing = () => {
  return (
    <div className='landing'>
       <Header />
       <Navbar />
       <About  />
       <Experience />
       <Services />
       <PortFolio />
       <Testimonial />
       <Contact />
       <Footer />
    </div>
  )
}

export default Landing