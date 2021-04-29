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
      This page was built by Briana Sanazzaro. Open source code: Git Hub
      <a href="https://github.com/brianars94/weather-react" target="_blank"> Open source code: Git Hub</a>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
