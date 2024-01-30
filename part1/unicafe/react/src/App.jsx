import { useState } from 'react'

import './App.css'


const Statistics = (props) => {
  console.log(props)
  return (
    <>
    <h2>Statistics </h2>
        <p>Good: {props.good}</p>
        <p>Neutral: {props.neutral}</p>
        <p>Bad: {props.bad}</p>
        <p>All: {props.good + props.neutral + props.bad}</p>
        <p>Average: {(props.good + props.neutral + props.bad)/3}</p>
        <p>Positive Average: {(props.good + props.neutral) /2}</p>

    
    </>
  )

}

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
    <div className="card">
      <h1>Give Feedback </h1>
        <button onClick={() => setGood((good) => good + 1)}>
          good 
        </button>
        <button onClick={() => setNeutral((neutral) => neutral + 1)}>
          neutral 
        </button>
        <button onClick={() => setBad((bad) => bad + 1)}>
          bad 
        </button>

        
        

      </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>

      
    </>
  )
}

export default App
