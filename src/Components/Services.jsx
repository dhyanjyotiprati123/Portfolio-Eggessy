import React from 'react'
import ServiceCard from '../SmallComponents/ServiceCard'

const Services = () => {
  return (
    <div className='service' id='services'>
        <h5 className="section-subheader">What I Offer</h5>
        <h1 className="section-header">Services</h1>

        <div className="container">
          <div className="service-main">
            
               <ServiceCard title="UI/UX Design" arr={[1,2,3,4,5,6,7]} />
               <ServiceCard title="Web Developement" arr={[0,1,2,3,4,5,6,7,8]} />
               <ServiceCard title="Content Creation" arr={[1,2,3,4,5,6,7]} />
             
          </div>
        </div>
    </div>
  )
}

export default Services