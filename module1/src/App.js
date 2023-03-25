import './App.css';
import {useState} from "react";
import { entry } from './entry';



function App() {
  const [toDoList, setList] = useState([]);
  const[newTask, setNewTask] = useState("");

  const addtoList = () => {
    //... array composesed of everything in first plus second entry
    const newToDoList = [...toDoList, newTask]
    setList(newToDoList)
  };

  const handleChange = (event) => {
    setNewTask(event.target.value)
  };

  //loop through planets and only display if gasplanet
  return (
  <div className="App">
    <div className="addTask">
      <input onChange={handleChange}></input>
      <button onClick={addtoList}>Add Task</button>
    </div>
    <div className="list">
      {toDoList.map((task) =>{
        return entry(task)
      })}
    </div>

  </div>
  );
}


export default App;
