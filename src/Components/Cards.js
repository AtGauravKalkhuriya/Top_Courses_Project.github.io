import React from 'react'
import Card from './Card';
import { useState } from 'react';

const Cards = (props) => {
    let courses = props.courses;
    // console.log("type....");
    // console.log(typeof(courses));
    let catagory = props.catagory;
    const [likedCourses, setLikedCourses] = useState([]);
    
     //just for testing that how to empty an object
    // for (const key in courses) {
    //   delete courses[key];
    // }
    console.log("length is ...");
    console.log(Object.keys(courses).length);
    if(Object.keys(courses).length ===0){
      // console.log("courses not found");
      return <div>
      <nav className="bg-bgDark py-4">
          <h1 className="text-3xl font-bold text-center text-white">No Courses found...</h1>
      </nav>
  </div>

    }
    else{
      
        function getCourses() {
          if(catagory === "All") {
              let allCourses = [];
              Object.values(courses).forEach(array => {
                  array.forEach(courseData => {
                      allCourses.push(courseData);
                  })
              })
              return allCourses;
          }
          else {
              //main sirf specific categiry ka data array krunga  
              return courses[catagory];      
          }
  
      }
  
    return (
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
          getCourses().map( (course) => (
              <Card key={course.id} 
              course = {course} 
              likedCourses={likedCourses}
              setLikedCourses={setLikedCourses}/>
          ))
        }
      </div>
    )

    }
    
    
  

      }
      
    
   
    
   




export default Cards
