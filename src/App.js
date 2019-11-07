import React from "react";
import "./App.css";
import Nav from "./Components/NavButtons/Navigation";
import Nasa from "./Components/NasaCard/Nasa";



function App() {
  return (
    <div className="App">
       <Nav />
       <Nasa />
    </div>
  );
}

export default App;
