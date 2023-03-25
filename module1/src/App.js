
import './App.css';
import {useState} from "react";


//component is a javascript function that returns jsx(ui)
function App() {

  //states are variables that react knows when they are modified
  const [age, setAge] = useState(1)
  const increaseAge = () => {
    setAge(age + 1)
    
    console.log(age)
  }

  const[text, setText] = useState("")
  const putText = (event) => { //event is used to grab information about the input
    setText(event.target.value)
  }

  return (
    <div className="App">
      {age}
      <button onClick={increaseAge}>Increase Age</button>
      <div></div>
      
      <div>{text}</div>
      <input type ="text" onChange={putText}></input>

    </div>

  );
}

export default App;
