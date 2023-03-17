
import './App.css';


//component is a javascript function that returns jsx(ui)
function App() {

  const name = <h1>Aaron</h1>;
  const age = <h2>20</h2>
  const user =(
  <div>
    {name}
    {age}
  </div>
  );

  return (
    <div className="App">
      {user}
      <UserComponent/>
      <UserComponent1 name="Bob" age={25}/>
    </div>

  );
}

//component is a javascript function that returns jsx(ui)
//component needs to start with a capital letter
//components allow for reusability
const UserComponent = () => {
  return(
    <div>
      <h1>Aaron</h1>
      <h2>20</h2>
    </div>

  ) 
};

//props are variables
const UserComponent1 = (props) => {
  return(
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
    </div>
  )
};

export default App;
