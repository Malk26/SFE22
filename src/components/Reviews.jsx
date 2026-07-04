import React from 'react'
import SectionHeader from './SectionHeader'
import { ratingData } from "../../public/data.jsx";;
import Review from './Review';
function Reviews() {
  return (
    <section id='reviews'>
        <div className='container'>
        <SectionHeader title={"Each and every client is important"} 
        description={"Discover what our students are saying in the Reviews section!Real feedback from learners who have experienced and benefited from our courses"}/>
        <div className='ratings'>
            {ratingData.map( (rating) => {
                const {id,stars,img,description,name,jop}=rating;
                return <Review
                key={id}
                stars={stars} // مهم جداً لتجنب تحذير الـ key
                img={img}
                description={description}
                name={name}
                jop={jop}
                />
                    
                
            })}
        </div>
        </div>
        </section>
    );
}

export default Reviews
