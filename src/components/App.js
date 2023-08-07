import React from "react";
import data from "../data/info";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import ProjectList from "./ProjectList";

function App() {
  return (
    <div>
      <NavBar />
      <Home name={data.name} city={data.city} color={data.color}/>
      <About bio={data.bio} links={data.links} />
      <ProjectList projects={data.projects} />
    </div>
  );
}

export default App;
