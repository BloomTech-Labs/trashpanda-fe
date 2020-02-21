import React, { useEffect, useState } from "react";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache, defaultDataIdFromObject } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import { HttpLink } from "apollo-link-http";
import { GPS_QUERY, PERMISSIONS, typeDefs, resolvers } from "./resolvers";

import Spinner from "./atoms/Spinner";

const AppCache = props => {
  const [client, setClient] = useState(undefined);

  useEffect(() => {
    const link = new HttpLink({ uri: "https://trashpanda-be.herokuapp.com" });

    const cache = new InMemoryCache({
      dataIdFromObject: object => {
        switch (object.__typename) {
          case "Material":
            return `Material: ${object.material_id}`;
          case "Family":
            return `Family: ${object.family_id}`;
          case "GPS":
            return `GPS`;
          case "PostalCode":
            return `PostalCode: ${object.postal_code}`;
          case "Location":
            return `Location: ${object.address}`;
          case "Permission":
            return `Permission`;
          default:
            return defaultDataIdFromObject(object);
        }
      }
    });

    // TODO: Monkey-patching in a fix for an open issue suggesting that
    // `readQuery` should return null or undefined if the query is not yet in the
    // cache: https://github.com/apollographql/apollo-feature-requests/issues/1
    cache.originalReadQuery = cache.readQuery;
    cache.readQuery = (...args) => {
      try {
        return cache.originalReadQuery(...args);
      } catch (err) {
        return undefined;
      }
    };

    const client = new ApolloClient({
      link,
      cache,
      typeDefs,
      resolvers
    });

    // set client immediately (replaces cache persist)
    setClient(client);

    return () => {};
  }, []);

  if (client === undefined) return <Spinner />;
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default AppCache;
