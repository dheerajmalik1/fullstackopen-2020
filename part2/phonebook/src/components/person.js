import React from 'react'

const Person = (props) =>{
// console.log("in these props",props)    
    return(
        <div>
           <li>{props.name} {props.phn}</li> 
        </div>
    )
}

export default Person