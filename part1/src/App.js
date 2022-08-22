const Hello = (props) => {
  return (
    <div>
      <p>Yeah {props.name}!</p>
    </div>
  )
}

const App = () => (
  <div>
    <p>Shaggadelic</p>
    <Hello />
  </div>
)

export default App