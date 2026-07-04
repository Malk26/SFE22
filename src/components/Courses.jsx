import React from 'react'
import SectionHeader from './SectionHeader'
import { coursesData } from "../../public/data.jsx"; //
import Course from './Course'
export default function Courses() {
  return (
    <section id="courses">
      <div className="container">
        <SectionHeader 
          title="Make Online Education Accessible" 
          description="Education is the most powerful tool to unlock potential,
          ignite curiosity, and shape a brighter future. At our platform, we believe 
          in making learning accessible, engaging, and transformative, empowering students
            to achieve their dreams and build the skills they need for success in an ever-changing world."
        />
        
        <div className="courses-container">
          {coursesData.map((course) => {
            const { id, img, department, title, rating, description, sales, price, discount, duration, lessons } = course;
            return (
      <Course 
        key={id} // مهم جداً لتجنب تحذير الـ key
        img={img}
        department={department}
        title={title}
        rating={rating}
        description={description}
        sales={sales}
        price={price}
        discount={discount}
        duration={duration}
        lessons={lessons}
      />
    );
            
            })}
          </div>
      </div>
    </section>
  )
}