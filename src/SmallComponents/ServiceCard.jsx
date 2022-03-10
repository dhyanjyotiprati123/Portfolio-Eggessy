import React from 'react';
import {BiCheck} from "react-icons/bi"

const ServiceCard = ({title, arr}) => {
  return (
    <div className='srvCard'>
        <div className="srvCard-header">
            {title}
        </div>
        <div className="srvCard-content">
            {arr.map((val)=> {
                return(
                    <div className="srvCard-info" key={val}>
                      <div className="srvCard-icon"><BiCheck /></div>
                      <p className="srvCard-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ServiceCard