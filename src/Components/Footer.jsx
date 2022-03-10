import React from 'react';
import {BsFacebook, BsWhatsapp} from "react-icons/bs";
import {AiFillInstagram, AiFillTwitterCircle} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="footer" id='footer'>
       <h1 className="footer-logo">Your Logo</h1>
       <ul className="footer-list">
         <li className="footer-item">
           <a href="#home" className="footer-link">Home</a>
         </li>
         <li className="footer-item">
           <a href="#about" className="footer-link">About</a>
         </li>
         <li className="footer-item">
           <a href="#experience" className="footer-link">Experience</a>
         </li>
         <li className="footer-item">
           <a href="#services" className="footer-link">Services</a>
         </li>
         <li className="footer-item">
            <a href="#portfolio" className="footer-link">Portfolio</a>
         </li>
         <li className="footer-item">
            <a href="#contact" className="footer-link">Contact</a>
         </li>
       </ul>

       <div className="footer-social">
          <BsFacebook />
          <BsWhatsapp />
          <AiFillInstagram />
          <AiFillTwitterCircle />
       </div>
       <p className="footer-para">&copy; created by webxpro all rights reserved</p>
    </footer>
  )
}

export default Footer