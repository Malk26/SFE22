import React from 'react'

function Review({stars,img,description,name,jop}) {
  return (
    <div className='rating'>
        <span className='stars'>{stars}</span>
        <p className='description'>{description}</p>
        <div className='person'>
            <img src={img} alt={name} />
            <div>
                <h3 className='text-primary'>{name}</h3>
                <p>{jop}</p>
            </div>
        </div>
    </div>
  )
}

export default Review