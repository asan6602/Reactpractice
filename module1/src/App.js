import './App.css';
import {useState} from "react";
import { Task } from './Task';

function App() {
  const [toDoList, setList] = useState([]);
  const[newTask, setNewTask] = useState({});

  const addtoList = () => {
    //... array composesed of everything in first plus second entry
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length -1].id + 1,
      taskName: newTask,
      completed: false
    }
    const newToDoList = [...toDoList, task]
    setList(newToDoList)
  };

  const handleChange = (event) => {
    setNewTask(event.target.value)
  };

  const deleteTask = (id) => {
    const newToDoList = toDoList.filter((task) => {
      if (task.id === id) {
        return false

      }
      else {
        return true
      }
    })
    setList(newToDoList)
  }

  const compeleteTask = (id) => {
    setList(
      toDoList.map((task) => {
        if(task.id === id) {
          return {...task, completed : true}
        }
        else {
          return task;
        }
      })  
    )
  }


  //line 48, functions can be passed as props
  return (
  <div className="App">
    <div className="addTask">
      <input onChange={handleChange}></input>
      <button onClick={addtoList}>Add Task</button>
    </div>
    <div className="list">
      {toDoList.map((task) =>{
        return (
          <Task taskName={task.taskName} 
          id={task.id} 
          completed={task.completed} 
          deleteTask={deleteTask}
          completeTask={compeleteTask}/>
        );
      })}
    </div>

  </div>
  );
}
export default App;