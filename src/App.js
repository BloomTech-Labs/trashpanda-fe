import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./organisms/HomePage";
import CategoryPage from "./organisms/CategoryPage";
import { Switch, Route, useHistory } from "react-router-dom";
import MaterialPage from "./organisms/MaterialPage";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import LocationsPage from "./organisms/LocationsPage";
import BottomNav from "./molecules/BottomNav";
import LandingPage from "./organisms/LandingPage";
import PermissionPage from "./organisms/PermissionPage";
import location from "./utils/UserLocation";

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

const PERMISSIONS = gql`
  query permissions @client {
    Permission {
      rejectedPermission
      __typename
    }
  }
`;

function isLandingFirstTime() {
  return !localStorage.getItem("firstTime");
}

const App = () => {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const [materials, setMaterials] = useState([]);
  const permissions = useQuery(PERMISSIONS);
  const cat = useQuery(GET_CATEGORIES);
  const mat = useQuery(GET_MATERIALS);
  const [gpsMutation] = location.gpsMutationHook();

  //Detect if it's the users first time on the website when we load app.
  useEffect(() => {
    console.log(permissions);
    if (
      permissions &&
      permissions.data.Permission.rejectedPermission === null
    ) {
      history.push("/intro");
    } else {
      location.setGpsCache(gpsMutation);
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
          <LocationsPage />
          <BottomNav />
        </Route>
        <Route exact path="/intro">
          <LandingPage />
        </Route>
        <Route exact path="/intro/permission">
          <PermissionPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
