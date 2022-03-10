import React from 'react'

const ContactCard = ({icon, title , desc}) => {
  return (
    <div className='cCard'>
       <div className="cCard-icon">
         {icon}
       </div>
       <div className="cCard-contacts">
           <h5 className="cCard-title">{title}</h5>
           <p className="cCard-para">{desc}</p>
       </div>
       <small className='cCard-msg'>Send a Message</small>
    </div>
  )
}

export default ContactCard