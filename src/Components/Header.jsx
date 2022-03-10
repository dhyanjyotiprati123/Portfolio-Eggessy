import React from 'react'
import Cta from '../SmallComponents/Cta'
import HeaderSocial from '../SmallComponents/HeaderSocial';
import ME from "../Assets/profile-main.png";

const Header = () => {
  return (
     <header className='header' id='home'>
       <div className="container">
         <div className="wrapper">
           <h5 className="header-subheading">Hello I Am</h5>
           <h1 className="header-heading">John Doe</h1>
           <h4 className="header-middleheading">full-stack developer</h4>
           <Cta />
           <HeaderSocial />

          <div className="header-imgContainer">
            <img src={ME} alt="myself" className="header-img" />
          </div>

          <a href="#contact" className="header-scroll">Scroll Down</a>
         </div>  
       </div>
     </header>
  )
}

export default Header