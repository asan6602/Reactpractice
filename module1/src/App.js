import './App.css';
import {User} from './User.js'



function App() {
  const users =  [
    {name: "Bob", age: 21},
    {name: "Joe", age: 22},
    {name: "Jim", age: 23},
  ];

  return <div className="App">
    {users.map((user, key) => {
      return <User name={user.name} age={user.age}/>
    })}
  </div>

}


export default App;
