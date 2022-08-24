const Header = (props) => {  return (
  <div>
    <p>{props.course}</p>
  </div>
)
}

//const Part = (props) => {}

const Content = (props) => {
  return (
    <p>{props.name} {props.exe}</p>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      
      <Content name = {part1.name} exe = {part1.exercises}/>
      <Content name = {part2.name} exe = {part2.exercises}/>
      <Content name = {part3.name} exe = {part3.exercises}/>
     
      <Total total = {part1.exercises + part2.exercises + part3.exercises}/>
   </div>
  )
}

export default App