import React from "react";
import ReactDOM from "react-dom";
import WeatherSearch from "./WeatherSearch";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App!</h1>
      <WeatherSearch />
      <br />
      Last Updated: April 22, 2021. 6:33pm. 
      <br />
      <footer> 
      This page was built by 
      <a href="https://www.linkedin.com/in/briana-sanazzaro/" target="_blank"> Briana Sanazzaro. </a>
      Open source code:
      <a href="https://github.com/brianars94/weather-react" target="_blank">  Git Hub</a>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
