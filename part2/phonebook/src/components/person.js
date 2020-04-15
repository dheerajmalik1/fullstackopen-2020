import React from 'react'

const Person = (props) =>{
//console.log("in these props",props)    
    return(
        <div>
           <li>{props.name}</li> 
        </div>
    )
}

export default Person