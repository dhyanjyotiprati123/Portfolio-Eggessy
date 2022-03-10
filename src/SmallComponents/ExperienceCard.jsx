import React from 'react';
import {BsPatchCheckFill} from "react-icons/bs"

const ExperienceCard = ({title, desc}) => {
  return (
    <div className='expCard'>
        <div className="expCard-icon">
            <BsPatchCheckFill />
        </div>
        <div className="expCard-info">
            <h3 className="expCard-title">{title}</h3>
            <h5 className="expCard-desc">{desc}</h5>
        </div>
    </div>
  )
}

export default ExperienceCard