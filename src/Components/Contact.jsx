import React from 'react';
import {AiOutlineMail,AiOutlineWhatsApp} from "react-icons/ai";
import {BsMessenger} from "react-icons/bs"
import ContactCard from '../SmallComponents/ContactCard';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
       <div className="wrapper">
          <h5 className="section-subheader">Get In Touch</h5>
          <h1 className="section-header">Contact Me</h1>

          <div className="container">
            <div className="contact-main">
             <div className="contact-cards">
                <ContactCard icon={<AiOutlineMail />} title="Email" desc="webxpro@gmail.com" />
                <ContactCard icon={<BsMessenger />} title="Messenger" desc="webxpro" />
                <ContactCard icon={<AiOutlineWhatsApp />} title="WhatsApp" desc="123-564-8907" />
             </div>
             <form action="" className="contact-form">
                 <input type="text" className="contact-input" placeholder='Enter your full name' />
                 <input type="text" className="contact-input" placeholder='Enter your email' />
                 <textarea type="text"rows={10} className="contact-area" placeholder='Write your message' />
                 <div className="contact-control">
                   <button type='submit' className='btn btn-primary'>Send Message</button>
                 </div>
             </form>
             </div>
          </div>
       </div>
    </div>
  )
}

export default Contact