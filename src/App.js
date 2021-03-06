import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="honolulu" />

 <footer> 
      This page was built by 
      <a href="https://www.linkedin.com/in/briana-sanazzaro/" rel="noreferrer" target="_blank"> Briana Sanazzaro. </a>
      Open source code:
      <a href="https://github.com/brianars94/weather-react" rel="noreferrer" target="_blank">  Git Hub</a>
      </footer>
    </div>
    </div>
  );
}



