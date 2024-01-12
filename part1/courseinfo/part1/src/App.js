const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1 className="d-flex justify-content-center mt-3">{props.course.name}</h1>
      </div>

  )
}



const Content = (props) => {
  
  return (
    <div>
      <h1>{props.course.parts[0].name} </h1>
      <h1>{props.course.parts[1].name} </h1>
      <h1>{props.course.parts[2].name} </h1>
      
    </div>
  )
}

const Total = (props) => {
  return (
    <>
    <h1>{props.course.parts[0].exercises}</h1>
      <h1>{props.course.parts[1].exercises}</h1>
      <h1>{props.course.parts[2].exercises}</h1>
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
      <Content course={course} />
      <Total course={course}/>
    </div>
  )
}

export default App;
