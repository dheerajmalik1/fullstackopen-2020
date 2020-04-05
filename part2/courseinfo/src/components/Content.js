import React from 'react'

const Content =(props)=>{
    console.log("in content props", props)
    return(
        <p>
            {props.content} {props.part}
        </p>
    )
}

export default Content;