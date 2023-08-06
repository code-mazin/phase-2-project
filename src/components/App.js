import React from "react";
import data from "../data/Data";
import Home from "./Home";

function App() {
  return (
    <div>
      <Home name={data.name} city={data.city} color={data.color}/>
    </div>
  );
}

export default App;
