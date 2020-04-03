import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({text, value})=>{
  return(
    <div>
      <table>
      <tbody>
       <tr>
          <td>{text}</td> 
          <td>{value}</td>
         </tr>
         </tbody> 
       </table>
    </div>
  )
}

const Statistics = (props) => {
  if(props.all===0){
    return(
      <div>
        <h1>No feedback given</h1>
      </div>
    )
  }
    
      return(
        <div>
          <h1>Statistics</h1>
          <Statistic value ={props.good} text="good" />
          <Statistic value ={props.bad} text="bad" />
          <Statistic value ={props.neutral} text="neutral" />
          <Statistic value ={props.all} text="all" />
          <Statistic value ={props.avg} text="avg" />
          <Statistic value ={props.positive} text="positive" />
        </div>
      )
    
    }

const Button = (props) =>{
  console.log(props);  
  return(
      <div>
        <button onClick={props.onClick}>{props.text}</button>
      </div>
    )
}


const App = () => {
  // save clicks of each button to own state
  const [good,  setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const incrementGood=()=>{
    setGood(good + 1)
  }
  const incrementNeutral=()=>{
    setNeutral(neutral + 1)
  }
  const incrementBad=()=>{
    setBad(bad + 1)
  }
  const all = good+neutral+bad;
  const avg =((good*1)+(neutral*0)+ (bad*-1))/all;
  const positive =good/all;
  const props={
     good, neutral, bad, all, avg, positive
  }
  return (
    
    <div>
      <h1>give feedback</h1>
      {/* <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button> */}
      <Button onClick ={incrementGood} text="good" />
      <Button onClick ={incrementNeutral} text="neutral" />
      <Button onClick ={incrementBad} text="bad" />
      <Statistics {...props} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

