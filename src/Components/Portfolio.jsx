import React from 'react';
import portData from "../Others/PortfolioGata";
import PortCard from '../SmallComponents/PortCard';

const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
      <div className="wrapper">
       <h5 className="section-subheader">My Recent Work</h5>
       <h1 className="section-header">Portfolio</h1>

       <div className="container">
         <div className="portfolio-main">
             {
               portData.map((val, indx) => <PortCard key={indx} img={val.img} title={val.title} desc={val.desc} />)
             }
         </div>
       </div>
       </div>
    </div>
  )
}

export default Portfolio