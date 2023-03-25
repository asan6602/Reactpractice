import './App.css';
import {useState} from "react";
//import { entry } from './entry';



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

  const deleteTask = (taskName) => {
    const newToDoList = toDoList.filter((task) => {
      if (task === taskName) {
        return false
      }
      else {
        return true
      }
    })
    setList(newToDoList)
  }

  //loop through planets and only display if gasplanet
  return (
  <div className="App">
    <div className="addTask">
      <input onChange={handleChange}></input>
      <button onClick={addtoList}>Add Task</button>
    </div>
    <div className="list">
      {toDoList.map((task) =>{
        return (
          <div>
            <h1>{task}</h1>
            <button onClick={() => deleteTask(task)}>X</button>
          </div>
        );
      })}
    </div>

  </div>
  );
}


export default App;
