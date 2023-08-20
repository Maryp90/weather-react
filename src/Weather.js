import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="current-temp">
        <span className="current-temp-num" id="current-temp-num"></span>
        <span className="current-temp-degrees">20º</span>
        <span>
          <span
            className="current-temp-celsius selectedTemperature"
            id="celsius"
          >
            C
          </span>
          <span className="current-temp-bar"> | </span>
          <span className="current-temp-fahrenheit" id="fahrenheit">
            F
          </span>
        </span>
      </div>
      <h1 className="city-name" id="city-name">
        Lisbon
      </h1>
      <div className="row-custom center-center weather-conditions">
        <div className="icon-col">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
            alt="Clear"
            className="current-weather-icon"
            id="icon-current"
          />
        </div>
        <div className="conditions">
          <span className="current-condition" id="current-condition">
            Cloudy
          </span>
          <p></p>
          <span className="humidity-text">
            Humidity: <span className="current-humidity" id="humidity"></span>79
            %
          </span>
          <div className="wind-text">
            Wind: <span className="current-wind" id="wind"></span>16 Km/h
          </div>
        </div>
      </div>
    </div>
  );
}
