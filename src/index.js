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
      This page was built by Briana Sanazzaro. Open source code: Git Hub
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
