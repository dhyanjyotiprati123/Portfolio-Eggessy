import React from 'react';
import {BsGithub} from "react-icons/bs"

const PortCard = ({img, title, desc}) => {
  return (
    <div className='portcard'>
        <figure className="portcard-figure">
            <img src={img} alt="" className="portcard-img" />
        </figure>
        <div className="portcard-info">
            <h3 className="portcard-title">{title}</h3>
            <p className="portcard-para">{desc}</p>
        </div>
        <div className="portcard-control">
            <button className="btn btn-dark"><BsGithub /></button>
            <button className="btn btn-primary">Live Demo</button>
        </div>
    </div>
  )
}

export default PortCard