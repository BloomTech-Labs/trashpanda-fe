import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import AppCache from "./AppCache";
import "./index.css";

ReactDOM.render(
  <AppCache>
    <Router>
      <App />
    </Router>
  </AppCache>,
  document.getElementById("root")
);
