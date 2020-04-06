import React from 'react'

const Content =({pro})=>{
    console.log("why is this not working");
    console.log("in content props", pro)
    return(
        <p>
            {pro.name} {pro.exercises}
        </p>
    )
}

export default Content;