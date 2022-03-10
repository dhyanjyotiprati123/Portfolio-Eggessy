import React from 'react'

const TestiCard = ({img, title, comment}) => {
  return (
    <div className='tcard'>
        <div className="tcard-figure">
          <img src={img} alt="" className="tcard-img" />
        </div>
        <div className="tcard-info">
           <h5 className="tcard-header">{title}</h5>
           <p className="tcard-para">{comment}</p>
        </div>
    </div>
  )
}

export default TestiCard