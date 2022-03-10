import React from 'react';
import {BsLinkedin,  BsDribbble} from "react-icons/bs";
import {FaGithub} from "react-icons/fa"

const HeaderSocial = () => {
  return (
    <div className='headerSocial'>
         <a href="https://in.linkedin.com/"  className="headerSocial-links"><BsLinkedin /></a>
         <a href="https://github.com/"  className="headerSocial-links"><FaGithub /></a>
         <a href="https://dribbble.com/"  className="headerSocial-links"><BsDribbble /></a>  
    </div>
  )
}

export default HeaderSocial