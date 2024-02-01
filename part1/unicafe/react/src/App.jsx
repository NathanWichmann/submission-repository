import { useState } from 'react'

import './App.css'

const StatisticLine = ({props, text, value}) => {

  return (
    <p>{text}: {value}</p>
  )
}


const Statistics = (props) => {
  if(props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <h2>No feedback given</h2>
    )  }

  return (
    <>
    <h2>Statistics </h2>
        <StatisticLine text='Good' value={props.good} />
        <StatisticLine text='Neutral' value={props.neutral} />
        <StatisticLine text='Bad' value={props.bad} />
        <StatisticLine text='All' value={props.good + props.neutral + props.bad} />
        <StatisticLine text='Average' value={(props.good + props.neutral + props.bad)/3} />
        <StatisticLine text='Positive Average' value={(props.good + props.neutral) /2} />

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
