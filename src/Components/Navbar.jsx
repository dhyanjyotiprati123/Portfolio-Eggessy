import React, { useState } from 'react';
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {RiServiceLine} from "react-icons/ri";
import {BiBook, BiMessageSquareDots} from "react-icons/bi";


const Navbar = () => {
  const [active, setActive] = useState("home")
  
  return (
    <nav className="navbar">
       <a href="#home" className={active === "home" ? "navbar-links navbar-active" : "navbar-links"} onClick={()=> setActive("home")} ><AiOutlineHome /></a>
       <a href="#about" className={active === "about" ? "navbar-links navbar-active" : "navbar-links"} onClick={()=> setActive("about")} ><AiOutlineUser /></a>
       <a href="#experience" className={active === "experience" ? "navbar-links navbar-active" : "navbar-links"} onClick={()=> setActive("experience")} ><BiBook /></a>
       <a href="#services" className={active === "services" ? "navbar-links navbar-active" : "navbar-links"} onClick={()=> setActive("services")} ><RiServiceLine /></a>
       <a href="#contact" className={active === "contact" ? "navbar-links navbar-active" : "navbar-links"} onClick={()=> setActive("contact")} ><BiMessageSquareDots /></a>
    </nav>
  )
}

export default Navbar