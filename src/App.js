import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./organisms/HomePage";
import CategoryPage from "./organisms/CategoryPage";
import { Switch, Route, useHistory } from "react-router-dom";
import MaterialPage from "./organisms/MaterialPage";

import { useQuery, useMutation, useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";
import LocationsPage from "./organisms/LocationsPage";
import BottomNav from "./molecules/BottomNav";
import LandingPage from "./organisms/LandingPage";
import PermissionPage from "./organisms/PermissionPage";

export const GET_CATEGORIES = gql`
  query getAllFamilies {
    families {
      material_ids
      family_id
      description
      family_type_id
    }
  }
`;

export const GET_MATERIALS = gql`
  query getAllMaterials {
    materials {
      description
      material_id
      long_description
    }
  }
`;

function isLandingFirstTime() {
  return !localStorage.getItem("firstTime");
}

function onLocationSuccess(position, setUserLocation, history) {
  setUserLocation(position.coords);
  history.push("/");
}

function onLocationError(err, history) {
  if (err.message === "User denied Geolocation") {
    history.push("/");
  } else {
    console.log("Unable to retrieve position, error: ", err);
    alert("Error: ", err.message);
  }
}

function getUserLocation(handleLocation, history) {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser");
    history.push("/");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    position => onLocationSuccess(position, handleLocation, history),
    err => onLocationError(err, history)
  );
}

const App = () => {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const client = useApolloClient();
  const cat = useQuery(GET_CATEGORIES);
  const mat = useQuery(GET_MATERIALS);
  const gps = useQuery(
    gql`
      {
        gps @client {
          GPS {
            latitude
            longitude
          }
        }
      }
    `
  );

  // const [addGps, { data }] = useMutation(
  //   gql`
  //     mutation SetGps($latitude: Float!, $longitude: Float!) {
  //       setGps(latitude: $latitude, longitude: $longitude) {
  //         gps {
  //           latitude
  //           longitude
  //         }
  //       }
  //     }
  //   `
  // );

  // useEffect(() => {
  //   if (gps.data) {
  //     console.log(gps.data);
  //     addGps({
  //       variables: {
  //         latitude: 0.0,
  //         longitude: 1.1
  //       }
  //     });
  //   } else {
  //   }
  //   console.log(gps);
  // }, []);

  //Detect if it's the users first time on the website when we load app.
  useEffect(() => {
    if (isLandingFirstTime()) {
      history.push("/intro");
    } else {
      getUserLocation(setUserLocation, history);
    }
  }, []);

  useEffect(() => {
    if (cat.data) setCategories(cat.data.families);
  }, [cat.data]);

  useEffect(() => {
    if (mat.data) setMaterials(mat.data.materials);
  }, [mat.data]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage categorylist={categories} />
          <BottomNav />
        </Route>
        <Route exact path="/category/:categoryId">
          <CategoryPage categorylist={categories} materiallist={materials} />
          <BottomNav />
        </Route>
        <Route exact path="/material/:materialId">
          <MaterialPage materials={materials} />
          <BottomNav />
        </Route>
        <Route exact path="/material/:materialId/locations">
          <LocationsPage location={userLocation} />
          <BottomNav />
        </Route>
        <Route exact path="/intro">
          <LandingPage />
        </Route>
        <Route exact path="/intro/permission">
          <PermissionPage
            handleLocation={setUserLocation}
            getLocation={getUserLocation}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
