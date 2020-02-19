import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./organisms/HomePage";
import CategoryPage from "./organisms/CategoryPage";
import { Switch, Route, useHistory } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MaterialPage from "./organisms/MaterialPage";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import LocationsPage from "./organisms/LocationsPage";
import BottomNav from "./molecules/BottomNav";
import TutorialPage from "./organisms/TutorialPage";
import CameraPage from "./organisms/CameraPage";
import location from "./utils/UserLocation";
import { lightTheme, darkTheme } from "./molecules/theme";
import Toggle from "./molecules/ToggleTheme";
import { useDarkMode } from "./molecules/useDarkMode";
import { GlobalStyles } from "./molecules/global";

export const GET_CATEGORIES = gql`
  query getAllFamilies {
    families {
      material_ids
      family_id
      description
      family_type_id
      image_url
    }
  }
`;

export const GET_MATERIALS = gql`
  query getAllMaterials {
    materials {
      description
      material_id
      long_description
      image_url
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
  const [gpsMutation] = location.gpsMutationHook();
  const [theme, toggleTheme] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;


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
    <ThemeProvider theme={themeMode}>
      <div className="App">
        <GlobalStyles />

        <Switch>
          <Route exact path="/">
            <HomePage toggleTheme={toggleTheme} theme={theme} />

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
            <TutorialPage />
          </Route>
          <Route exact path="/camera">
            <CameraPage />
            <BottomNav />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
};

export default App;
