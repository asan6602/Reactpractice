
import './App.css';
import Axios from "axios";
import {useState, useEffect} from "react";

function App() {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  }
  useEffect(() => {
    //library to fetch data
    fetchCatFact()
  }, []);

  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);
  const fetchData = () => {
    //` backticks
    Axios.get(`https://api.agify.io/?name=${name}`).then((res1) => {
      setPredictedAge(res1.data)
    });
  }; 

  return (
    <div className="App">
        <button onClick={fetchCatFact}>Cat Fact</button>
        <p>{catFact}</p>

        <div>
          <br></br>
          <input placeholder='enter a name' onChange={(event) => {setName(event.target.value)}}></input>
          <br></br>
          <button onClick={fetchData}>Predict Age</button>
          <h1>Name: {predictedAge?.name}</h1>
          <h1>Predicted Age: {predictedAge?.age}</h1>
          <h1>Count: {predictedAge?.count}</h1>
        </div>
    </div>
  );
}

//? only try to access if not null

export default App;
