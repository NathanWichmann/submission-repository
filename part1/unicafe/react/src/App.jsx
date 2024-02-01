import { useState } from 'react'

import './App.css'


const Statistics = (props) => {
  console.log(props)
  if(props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <h2>No feedback given</h2>
    )  }

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

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>

)

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {setGood((good) => good + 1)}
  const handleNeutral = () => {setNeutral((neutral) => neutral + 1)}
  const handleBad = () => {setBad((bad) => bad + 1)}



  return (
    <>
    <div className="card">
      <h1>Give Feedback </h1>
        <Button handleClick={handleGood} text='Good'/>
        <Button handleClick={handleNeutral} text='Neutral' />
        <Button handleClick={handleBad} text='Bad' />
    </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>

      
    </>
  )
}

export default App
