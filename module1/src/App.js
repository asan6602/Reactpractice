
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

  const [excuse, setExcuse] = useState(null);
  const fetchExcuse = (setting) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${setting}`).then((res2) => {
      setExcuse(res2.data[0])
    });
  } 

  return (
    <div className="App">
        <button onClick={fetchCatFact}>Cat Fact</button>
        <p>{catFact}</p>

        <hr></hr>

        <div>
          <br></br>
          <input placeholder='enter a name' onChange={(event) => {setName(event.target.value)}}></input>
          <button onClick={fetchData}>Predict Age</button>
          <h1>Name: {predictedAge?.name}</h1>
          <h1>Predicted Age: {predictedAge?.age}</h1>
          <h1>Count: {predictedAge?.count}</h1>
        </div>

        <hr></hr>

        <div>
          <h1>Generate An Excuse</h1>
          <button onClick={() => fetchExcuse("party")}>Party</button>
          <button onClick={() => fetchExcuse("family")}>Family</button>
          <button onClick={() => fetchExcuse("office")}>Office</button>
          <h1>Type: {excuse?.category}</h1>
          <h1>Predicted Age: {excuse?.excuse}</h1>

        </div>
    </div>
  );
}

//? only try to access if not null

export default App;
