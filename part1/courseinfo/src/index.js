import React from 'react'
import ReactDOM from 'react-dom'
const Header = (props) => {return(<div>{props.course.name}</div>)}
const Content = (props)=> {
  console.log(props)
    return (
      <div>
        {props.parts.name} {props.parts.exercises}
      </div>
    )
  }
// const Part = (props) => {return(<div>{props.parts.name} {props.parts.exercises}</div>)}
const Total= (props) => {return <div>{props.parts}</div>}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts[0]} />
      <Content parts={course.parts[1]} />
      <Content parts={course.parts[2]} />
      <Total parts={course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises} />
    </div>
      )
}

ReactDOM.render(<App />, document.getElementById('root'))