import React from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export default function Card({ color, bgColor, description, img, title }) {
return (
    <div className='card'>
      {/* تصحيح الـ style هنا */}
    <span className='icon' style={{ color: color, backgroundColor: bgColor }}>
        {img}
    </span>
    <h2>{title}</h2>
    <span className='line'></span>
    <p>{description}</p>
    </div>
)
}
