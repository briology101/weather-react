import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        <a href="https://github.com/briology101/weather-react">
          Open source code
        </a>{" "}
        by Bri Franz-Jonas
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


