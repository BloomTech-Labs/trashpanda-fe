import React from "react";
import "./App.css";
import HomePage from "./organisms/HomePage";
import CategoryPage from "./organisms/CategoryPage";
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
        <Route exact path="/category/:id">
          <CategoryPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
