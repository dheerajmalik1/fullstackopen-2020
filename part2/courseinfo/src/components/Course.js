import React from 'react';
import Header from './Header'
import Content from './Content'

const Course =(props)=>{
    console.log("inside Course prop value of props", props);
    console.log("or ye",props.course.parts.map((c,i)=>c.name))
return(
    <div>
        <Header heading={props.course.name} />
        {props.course.parts.map((c,i)=><Content part={c.exercises} content={c.name} key={i} /> )}
        
    </div>
    )
}

export default Course;