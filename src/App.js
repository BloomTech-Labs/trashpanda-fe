import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./organisms/HomePage";
import CategoryPage from "./organisms/CategoryPage";
import { Switch, Route, useHistory } from "react-router-dom";
import MaterialPage from "./organisms/MaterialPage";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import LocationsPage from "./organisms/LocationsPage";
import BottomNav from "./molecules/BottomNav";
import LandingPage from "./organisms/LandingPage";
import PermissionPage from "./organisms/PermissionPage";

const GET_CATEGORIES = gql`
  query getAllFamilies {
    families {
      material_ids
      family_id
      description
      family_type_id
    }
  }
`;

const GET_MATERIALS = gql`
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

function onLocationSuccess(position, setUserLocation) {
  console.log("Position: ", position);
}

function onLocationError(err) {
  console.log("Unable to retrieve position, error: ", err);
}

function getUserLocation(handleLocation) {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    position => onLocationSuccess(position, handleLocation),
    onLocationError
  );
}

const App = () => {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const cat = useQuery(GET_CATEGORIES);
  const mat = useQuery(GET_MATERIALS);

  //Detect if it's the users first time on the website when we load app.
  useEffect(() => {
    if (isLandingFirstTime()) {
      console.log("It's my first time here!");
      history.push("/intro");
    } else {
      console.log("It's NOT my first time here!");
      getUserLocation(setUserLocation);
    }
  }, []);

  useEffect(() => {
    if (cat.data) setCategories(cat.data.families);
    console.log("Data Cat: ", cat.data);
  }, [cat.data]);

  useEffect(() => {
    if (mat.data) setMaterials(mat.data.materials);

    console.log("Data Mat: ", mat.data);
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
