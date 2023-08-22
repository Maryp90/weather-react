import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  let setWeather = useState("");

  function displayWeather(response) {
    setWeather({
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
    });
  }

  function submit(event) {
    event.preventDefault();
    let apiKey = "f3t5b36ab43852690f35359144ebo9d6";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

    <form onSubmit={submit}>
      <input type="search" placeholder="Enter a city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>

function updateCity(event) {
  setCity(event.target.value);
}
  
  return (
    <div className="Weather">
      <div className="row-custom space-between-center current-weather">
        <h1 className="city-name" id="city-name">
          Lisbon
        </h1>
        <div className="current-temp">
          <span className="current-temp-num" id="current-temp-num"></span>
          <div className="icon">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
              alt="Clear"
              className="current-weather-icon"
              id="icon-current"
            />
          </div>
          <span className="current-temp-degrees">20º</span>
          <span>
            <span className="current-temp-celsius selectedTemperature" id="celsius">
              C
            </span>
            <span className="current-temp-bar"> | </span>
            <span className="current-temp-fahrenheit" id="fahrenheit">
              F
            </span>
          </span>
        </div>
      </div>
      <div className="row-custom space-between-center weather-conditions">
        <div className="conditions">
          <span className="current-condition" id="current-condition">
            Cloudy
          </span>
          <br></br>
          <span className="humidity-text">
            Humidity: <span className="current-humidity" id="humidity"></span>79 %
          </span>
          <div className="wind-text">
            Wind: <span className="current-wind" id="wind"></span>16 Km/h
          </div>
        </div>
      </div>
      <div class="weather-forecast" id="forecast"></div>
    </div>
  );
}
