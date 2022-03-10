import React from 'react';
import tData from '../Others/TData';
import TestiCard from '../SmallComponents/TestiCard';
import { Pagination, Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <div className='testi' id='testimonials'>
       <div className="wrapper">
          <h5 className="section-subheader">Reviw From Clients</h5>
          <h1 className="section-header">Testimonials</h1>

          <div className="container">
            <div className="testi-main">
            <Swiper 
                 modules={[ Pagination, Navigation]}
                 spaceBetween={1}
                 slidesPerView={1}
                 pagination={{ clickable: true }}
            >
              {
                tData.map((val, indx)=> {
                   return(
                     <SwiperSlide  key={indx}>
                       <TestiCard title={val.name} img={val.img} comment={val.comment} />
                     </SwiperSlide>
                   )
                })
              }
            </Swiper>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Testimonials