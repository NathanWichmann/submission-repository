const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1 className="d-flex justify-content-center mt-3">{props.course}</h1>
      </div>

  )
}

const Part = (props) => {
  return (
    <>
    <h2 className="d-flex justify-content-center mt-3">{props.part1} {props.exercises1}</h2>
    <h2 className="d-flex justify-content-center mt-3">{props.part2} {props.exercises2}</h2>
    <h2 className="d-flex justify-content-center mt-3">{props.part3} {props.exercises3}</h2>
    </>
  )
}



const Content = (props) => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Part part1={part1} exercises1={exercises1}/>
      <Part part2={part2} exercises2={exercises2}/>
      <Part part3={part3} exercises3={exercises3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}

export default App;
