import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// a proper place to define a component
const Statistics = (props) => {
  return(
    <div>
      <h1>{props.heading}</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>  
      <p>average {props.avg}</p>  
      <p>positive {props.positive}</p>  
    </div>
  )
}




const App = () => {
  // save clicks of each button to own state
  const [good,  setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const all = good+neutral+bad;
  const avg =((good*1)+(neutral*0)+ (bad*-1))/all;
  const positive =good/all;
  const props={
    heading:"statistics", good, neutral, bad, all, avg, positive
  }
  return (
    
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      {/* <Button /> */}
      <Statistics {...props}/>
      
     
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)