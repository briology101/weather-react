import React from "react";
// eslint-disable-next-line
import axios from "axios";
import "./styles.css";

export default function Weather() {
  return (
    <div className="app">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h1>Cicada Weather</h1>
            <span className="badge bg-primary" id="beta">
              BETA
            </span>
          </div>
        </div>

        <div className="row" id="details">
          <div className="col-7" id="search">
            <form id="city-search">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="city-search-input"
                  placeholder="Enter City"
                />
                <button type="submit" value="search">
                  Search
                </button>
                <button id="current-location">Current Location</button>
              </div>
            </form>
          </div>

          <div className="col-4" id="current-date-time"></div>

          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                  <div id="entered-city">Kalamazoo</div>
                  <div id="temp-current">78°F</div>
                </div>

                <div className="col-4">
                  <div id="icon-condition">
                    <img src="" alt="" id="icon" className="float-left" />
                    <br></br>
                  </div>
                  <div id="conditions">Cloudy</div>
                </div>

                <div className="col-4">
                  <div id="current-summary">
                    Feels Like: <span id="feels-like">78</span>°F<br></br>
                    Humidity: <span id="humidity">75</span>%<br></br>
                    Wind Speed: <span id="wind">5</span> mph<br></br>
                    Wind Gusts: <span id="wind-gust">10</span> mph<br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
