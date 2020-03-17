import React from 'react'
import ReactDOM from 'react-dom'
const Header = (props) => {return(<div>{props.course}</div>)}
const Content = (props)=> {
    return (
      <div>
        <Part name={props.name} exercises={props.exercises} />
      </div>
    )
  }
const Part = (props) => {return(<div>{props.part.name} {props.part.exercises}</div>)}
const Total= (props) => {return <div>{props.sum}</div>}
const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
  
    return (
      <div>
        <Header course ={course} />
        <Part part ={part1}/>
         <Part part ={part2}/>
        <Part part ={part3}/>
        <Total sum={part1.exercises+part3.exercises+part2.exercises}/>
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))