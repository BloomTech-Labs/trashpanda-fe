import gql from "graphql-tag";

export const GPS_QUERY = gql`
  query coordinates {
    GPS {
      latitude
      longitude
      __typename
    }
  }
`;

export const PERMISSIONS = gql`
  query permissions @client {
    Permission {
      rejectedPermission
      __typename
    }
  }
`;

export const typeDefs = gql`
  extend type Mutation {
    setGps(latitude: Float!, longitude: Float!): GPS
    setRejectedPermissions(rejectedPermission: Boolean!): Permission
  }
  extend type Query {
    gps: GPS
    permissions: Permission
  }

  extend type GPS {
    latitude: Float!
    longitude: Float!
  }

  extend type Permission {
    rejectedPermission: Boolean!
  }
`;

export const resolvers = {
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
    },
    setRejectedPermissions: (_root, { rejectedPermission }, { cache }) => {
      const currentPermissions = cache.readQuery({ query: PERMISSIONS });
      const data = {
        Permission: { rejectedPermission, __typename: "Permission" },
        __typename: "Mutation"
      };
      cache.writeQuery({ query: PERMISSIONS, data });
      return data;
    }
  },
  Query: {
    gps: (_root, __, { cache }) =>
      cache.readQuery({
        query: GPS_QUERY
      }),
    permissions: (_root, __, { cache }) =>
      cache.readQuery({
        query: PERMISSIONS
      })
  }
};
