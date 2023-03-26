
import './App.css';
import Axios from "axios";
import {useState, useEffect} from "react";

function App() {
  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    //library to fetch data
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  }, []);

  return (
    <div className="App">
        <button>Cat Fact</button>
        <p>{catFact}</p>
    </div>
  );
}

export default App;
