
import './App.css';
import {useEffect} from "react";

//useEffect controls what happens during which stage of the lifecycle


function App() {
  
  //called everyime there is a state change
  useEffect(() => {
    console.log("Component Mounted")
  })

  return (
    <div className="App">

    </div>
  );
}

export default App;

//mounting: comoponent appearing
//updating: component is changing
//unmounting: component not appearing