

import React from "react";
import "./App.css";
import Search from "./Search";
import Temperature from "./Temperature";
import Current from "./Current";

import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
       <div class="weather-app">
            <form class="search-form" id="search-form">
                <div class="row">
                    <div class="col-6">
                        <input type="search" placeholder="Type a city.." autofocus="on" autocomplete="off"
                            id="city-input" class="form-control shadow-sm" />
                    </div>
                    <div class="col-3">
                        <input type="submit" value="Search" class="form-control btn btn-light btn btn-outline-secondary shadow-sm w-100" />
                    </div>
                    <div class="col-3">
                        <button class="btn btn-light w-200 btn btn-outline-secondary" id="current-location-button">
                            Current 
                        </button>
                    </div>
                </div>
                
            </form>
             </div>
              </div>
<img src="" alt="Clear" id="icon" />
            <li id="date"></li>
           <br />
            <h1 id="city"></h1>
          

<li> <span id="country"></span> </li>
<li>Current conditions: <span id="description"></span> </li>
         
       
            <div class="row">
                <div class="col-6">
                    <div class="clearfix">
                        <div class="float-left">
                            <span class="temperature" id="temperature"></span>
                      <span class="units">
                          
<a href="#" id="fahrenheit-link" class="active">°F</a>|
<a href="#" id="celsius-link">°C</a>
                            </span>


                            
                         
                            
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <ul>
 <li>Lowest: <span id="min"></span> °F</li>
<li>Highest: <span id="max"></span> °F</li>

                        <li>Humidity: <span id="humidity"></span>%</li>
                        <li>Wind: <span id="wind"></span> km/h</li>
                    </ul>
                </div>
            </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);


export default App;
