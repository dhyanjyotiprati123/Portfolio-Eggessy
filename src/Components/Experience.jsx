import React from 'react'
import ExperienceCard from '../SmallComponents/ExperienceCard'

const Experience = () => {
  return (
    <div className='experience' id='experience'>
       <h5 className="section-subheader">What Skills I Have</h5>
       <h1 className="section-header">My Experience</h1>

       <div className="container">
          <div className="experience-main">
             <div className="experience-inner">
                <h3 className="experience-title">Front-End Developement</h3>
               <div className="experience-cards"> 
               <ExperienceCard title={"HTML"} desc={"Experienced"} />
               <ExperienceCard title={"CSS"} desc={"Experienced"} />
               <ExperienceCard title={"JavaScrript"} desc={"Experienced"} />
               <ExperienceCard title={"Bootstrap"} desc={"Experienced"} />
               <ExperienceCard title={"SCSS"} desc={"Experienced"} />
               <ExperienceCard title={"React"} desc={"Experienced"} />
               <ExperienceCard title={"Framer Motion"} desc={"Experienced"} />
               <ExperienceCard title={"Gsap"} desc={"Experienced"} />
               </div>
             </div>
             <div className="experience-inner">
               <h3 className="experience-title">Back-End Developement</h3>
               <div className="experience-cards"> 
               <ExperienceCard title={"NodeJS"} desc={"Experienced"} />
               <ExperienceCard title={"ExpressJs"} desc={"Experienced"} />
               <ExperienceCard title={"MongoDB"} desc={"Experienced"} />
               <ExperienceCard title={"JWT"} desc={"Intermediate"} />
               <ExperienceCard title={"PassportJS"} desc={"Intermediate"} />
               <ExperienceCard title={"MySQL"} desc={"Beginner"} />
               </div>
             </div>
          </div>
       </div>
    </div>
  )
}

export default Experience