import React from 'react'
import ReactDOM from 'react-dom'
const Header = (props) => {return(<div>{props.course}</div>)}
const Content = (props) => {return <div>{props.name} {props.exercises}</div>}
const Total= (props) => {return <div>{props.sum}</div>}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>
        <Header course ={course}/>
      </h1>
      <p>
        <Content name={part1} exercises={exercises1}/>
      </p>
      <p>
        <Content name={part2} exercises={exercises2}/>
      </p>
      <p>
        <Content name={part3} exercises={exercises3}/>
      </p>
      <p>Number of exercises<Total sum ={exercises1 + exercises2 + exercises3} /></p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))