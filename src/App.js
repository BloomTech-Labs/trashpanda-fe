import React from "react";
import "./App.css";
import HomePage from "./organisms/HomePage";
import CategoryPage from "./organisms/CategoryPage";
import { Switch, Route } from "react-router-dom";
import NavBar from "./molecules/NavBar";
import MaterialPage from "./organisms/MaterialPage";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "https://trashpanda-be.herokuapp.com"
});
const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/category/:id">
            <CategoryPage />
          </Route>
          <Route exact path="/category/:id/:materialId">
            <MaterialPage />
          </Route>
        </Switch>
      </div>
    </ApolloProvider>
  );
};

export default App;
