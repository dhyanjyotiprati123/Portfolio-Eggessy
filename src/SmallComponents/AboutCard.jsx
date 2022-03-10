import React from 'react'

const AboutCard = ({icon, title , desc}) => {
  return (
    <div className='aboutCard'>
        <div className="aboutCard-icon">{icon}</div>
        <div className="aboutCard-info">
            <h3 className="aboutCard-title">{title}</h3>
            <p className="aboutCard-para">{desc}</p>
        </div>
    </div>
  )
}

export default AboutCard