import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import gql from "graphql-tag";

import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const link = createHttpLink({ uri: "https://trashpanda-be.herokuapp.com" });

// const cache = new InMemoryCache();
const cache = new InMemoryCache({
  dataIdFromObject: object => {
    switch (object.__typename) {
      case "Material":
        return `Material: ${object.material_id}`;
      case "Family":
        return `Family: ${object.family_id}`;
      case "GPS":
        return "GPS";
      default:
        return defaultDataIdFromObject(object);
    }
  }
});

const typeDefs = gql`
  extend type Query {
    gps: GPS
  }

  extend type GPS {
    latitude: Float!
    longitude: Float!
  }
`;

const resolvers = {
  Mutation: {
    setGps: (_root, { latitude, longitude }, { cache }) => {
      cache.writeData({ gps: { latitude, longitude } });
      return null;
    }
  },
  Query: {
    gps: (_root, __, { cache }) => {
      const queryResult = cache.readQuery({
        query: gql`
          {
            GPS {
              latitude
              longitude
              __typename
            }
          }
        `
      });
      console.log(queryResult);
      return queryResult;
    }
  }
};

const client = new ApolloClient({
  link,
  cache,
  typeDefs,
  resolvers
});

cache.writeData({
  data: {
    gps: {
      latitude: 2.2,
      longitude: 3.3,
      __typename: "GPS"
    }
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    {/* <div /> */}
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
