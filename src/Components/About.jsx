import React from 'react';
import ME from "../Assets/profile-main.png";
import {FaAward, FaUsers, } from "react-icons/fa";
import {VscFolderLibrary} from "react-icons/vsc";
import AboutCard from '../SmallComponents/AboutCard';

const About = () => {
  return (
    <div className='about' id='about'>
       <div className="container">
         <div className="wrapper">
           <h5 className="section-subheader">Get To Know</h5>
           <h1 className="section-header">About Me</h1>

           <main className="about-main">
              <div className="about-imgContainer">
                 <img src={ME} alt="myself" className="about-img" />
              </div>
              <div className="about-infoContainer">
                <div className="about-cards">
                   <AboutCard icon={<FaAward />} title="Experience" desc="3+ years working" />
                   <AboutCard icon={<FaUsers />} title="Clients" desc="200+ Worldwide" />
                   <AboutCard icon={<VscFolderLibrary />} title="Projects" desc="100+ Completed" />
                </div>
                <p className="about-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur praesentium libero et corrupti maiores ratione, delectus fugit sapiente! Ea neque facere exercitationem sequi eligendi aliquid fuga eius maxime explicabo dolor tenetur, voluptatem perferendis esse possimus. Odio exercitationem accusantium autem, dignissimos, unde officia quam quidem fuga assumenda asperiores necessitatibus nulla vel.</p>
                <button className="btn btn-primary">Let's Talk</button>
              </div>
           </main>
        </div>
       </div>
    </div>
  )
}

export default About