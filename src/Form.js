import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <form className="input-group row-custom center-center" id="search-city">
      <input
        type="text"
        placeholder="Enter a City"
        className="search-bar"
        id="search-city-input"
        autoComplete="off"
        autoFocus="on"
      />
      <button
        type="button"
        className="btn btn-link search-box"
        id="search-box-button"
      >
        Search
      </button>
      <button
        type="button"
        className="btn btn-link current-location"
        id="current-location-button"
      >
        Current Location
      </button>
    </form>
  );
}
