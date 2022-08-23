const Header = (props) => {  return (
  <div>
    <p>{props.course}</p>
  </div>
)
}

const Part = (props) => { return(
  <div>
  <p>{props.part} {props.exe}</p>
  </div>
)
}

const Content = (props) => {  return (    
    <div>
      <Part part={props.part1} exe={props.exercises1} />
      <Part part={props.part2} exe={props.exercises2} />
      <Part part={props.part3} exe={props.exercises3} />
    </div>
  )
}

const Total = (props) => {  return (
  <div>
      <p>Number of exercises {props.total}</p> 

  </div>
)
}



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
           <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />

      <Total
        exercise1={exercises1}
        exercise2={exercises2}
        exercise3={exercises3}
      />
    </div>
   
      
    </div>
  )
}

export default App