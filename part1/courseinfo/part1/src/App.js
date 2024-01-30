const Header = (props) => {

  return (
    <div>
      <h1 className="d-flex justify-content-center mt-3">{props.course.name}</h1>
      </div>

  )
}



const Content = (props) => {
  console.log(props)
  return (
    <div>
      <h2>{props.course.parts[0].name} </h2>
      <h2>{props.course.parts[1].name} </h2>
      <h2>{props.course.parts[2].name} </h2>
      
    </div>
  )
}

const Total = (props) => {
  return (
    <>
    <p>Number of exercises: {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>

    </>
  )
}


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
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default App;
