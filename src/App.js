import React from "react";
import "./App.css";
import HomePage from "./organisms/HomePage";
import { Switch, Route } from "react-router-dom";
import NavBar from "./molecules/NavBar";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
