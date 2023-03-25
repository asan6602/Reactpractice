
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

  const[showText,  setshowText] = useState(true) 
  const[textColor,  setTextColor] = useState("black") 


  const[count,  setCount] = useState(0) 
  

  return (
    <div className="App">
      {age}
      <button onClick={increaseAge}>Increase Age</button>
      <h1> </h1>
      
      <div>{text}</div>
      <input type ="text" onChange={putText}></input>
      
      {showText === true && <h1 style ={{color: textColor}}>Hi My Name is Aaron</h1>}
      <button onClick={() => {setshowText(!showText)}}>Show/Hide</button>
      <button onClick={() => {setTextColor(textColor==="black"?"red":"black")}}>Change Color</button>

      <h1> </h1>
      <button onClick={() => {setCount(count + 1)}}>Increase</button>
      <button onClick={() => {setCount(count - 1)}}>Decrease</button>
      <button onClick={() => {setCount(0)}}>Set to Zero</button>
      <h1>{count}</h1>
      
    </div>

  );
}

export default App;
