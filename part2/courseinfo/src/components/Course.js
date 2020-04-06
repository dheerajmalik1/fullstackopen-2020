import React from 'react';
import Header from './Header'
import Content from './Content'
import Total from './Total'


const Course =(props)=>{
    console.log("checl me out",props);
    
    
return(
    <div>
        <Header heading={props.course.name} />
        {/* {props.course.parts} */}
        {/* <Content hhhhh ={props}/> */}
        {props.course.parts.map((c)=><Content  pro={c}/>)}
        <Total total={props.course.parts}/>
      </div>
    )
}

export default Course;