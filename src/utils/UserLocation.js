import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

export const UPDATE_GPS = gql`
  mutation setGps($latitude: Float!, $longitude: Float!) {
    setGps(latitude: $latitude, longitude: $longitude) @client {
      GPS {
        latitude
        longitude
      }
    }
  }
`;

const gpsMutationHook = () => {
  return useMutation(UPDATE_GPS);
};

const setGpsCache = (hook, cb) => {
  navigator.geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude } = position.coords;
      hook({ variables: { latitude, longitude } });
    },
    err => {
      console.error(err)
      cb();
    },
    {
      timeout: 5000
    }
  );
};

export default { setGpsCache, gpsMutationHook };
