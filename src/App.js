import React from "react";
import "./App.css";
import HomePage from "./organisms/HomePage";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
