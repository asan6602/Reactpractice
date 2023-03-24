
import './App.css';



function App() {
  const names =  ["Bob","Joe","Jim"]

  //.map can be used to iterate through an array in js
  return <div className="App">
    {names.map((name, key) => {
      return <h1 key={key}>{name}</h1>
    })}
  </div>

}

export default App;
