const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

return (
  <div>
    <p>Shaggadelic</p>
    <Hello name="George" />
    <Hello name="Daisy" />
  </div>
  )
}

export default App