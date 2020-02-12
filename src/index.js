import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache, defaultDataIdFromObject } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";

import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const GPS_QUERY = gql`
  query coordinates {
    GPS {
      latitude
      longitude
      __typename
    }
  }
`;

const link = new HttpLink({ uri: "https://trashpanda-be.herokuapp.com" });

const cache = new InMemoryCache({
  dataIdFromObject: object => {
    switch (object.__typename) {
      case "Material":
        return `Material: ${object.material_id}`;
      case "Family":
        return `Family: ${object.family_id}`;
      case "GPS":
        return `GPS: ${object.latitude}`;
      case "PostalCode":
        return `PostalCode: ${object.postal_code}`;
      case "Location":
        return `Location: ${object.address}`;
      default:
        return defaultDataIdFromObject(object);
    }
  }
});

const typeDefs = gql`
  extend type Mutation {
    setGps(latitude: Float!, longitude: Float!): GPS
  }
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
      const currentGps = cache.readQuery({ query: GPS_QUERY });
      const data = {
        GPS: { ...currentGps.GPS, latitude, longitude },
        //mutations are requesting typename from mutation where none exists. Set top level typename to Mutation to clear warning.
        __typename: "Mutation"
      };
      cache.writeQuery({ query: GPS_QUERY, data });
      return data;
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

//add placeholder for GPS data
cache.writeQuery({
  query: GPS_QUERY,
  data: {
    GPS: {
      latitude: 0,
      longitude: 0,
      __typename: "GPS"
    }
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
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
