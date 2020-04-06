import React from 'react'

const Total =({total})=>{
console.log("inside total", total.reduce((a,c)=>a+c.exercises,0));
//parts.reduce((accum, part) => accum + part.exercises, 0)  
    return(
        <div>
            {<h3>total of {total.reduce((a,c)=>a+c.exercises,0)}</h3>}
            {/* <em>total of {props.total} exercise</em> */}
        </div>
    )
}
export default Total;