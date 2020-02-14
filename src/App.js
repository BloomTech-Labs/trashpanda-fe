import React, { useEffect } from "react";
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
  const permissions = useQuery(PERMISSIONS);
  const cat = useQuery(GET_CATEGORIES);
  const mat = useQuery(GET_MATERIALS);
  const [gpsMutation] = location.gpsMutationHook();

  useEffect(() => {
    if (
      permissions &&
      permissions.data.Permission.rejectedPermission === null
    ) {
      history.push("/intro");
    } else {
      location.setGpsCache(gpsMutation);
    }
  }, [permissions]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
          <BottomNav />
        </Route>
        <Route exact path="/category/:categoryId">
          <CategoryPage />
          <BottomNav />
        </Route>
        <Route exact path="/material/:materialId">
          <MaterialPage />
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
