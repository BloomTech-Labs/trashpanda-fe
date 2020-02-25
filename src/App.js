import React, { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./organisms/HomePage";
import CategoryPage from "./organisms/CategoryPage";
import { Switch, Route, useHistory } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MaterialPage from "./organisms/MaterialPage";

import gql from "graphql-tag";
import LocationsPage from "./organisms/LocationsPage";
import BottomNav from "./molecules/BottomNav";
import TutorialPage from "./organisms/TutorialPage";
import CameraPage from "./organisms/CameraPage";
import ClusterPage from "./organisms/ClusterPage";
import location from "./utils/UserLocation";
import { lightTheme, darkTheme } from "./molecules/theme";
import { useDarkMode } from "./molecules/useDarkMode";
import { GlobalStyles } from "./molecules/global";
import CameraNav from "./molecules/CameraNav";

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

const App = () => {
  const history = useHistory();
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const [shutterPress, setShutterPress] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);
  const [appCluster, setAppCluster] = useState();

  useEffect(() => {
    const permissions = JSON.parse(localStorage.getItem("permissions"));

    //remove persisted cache from apollo if exists
    localStorage.removeItem("apollo-cache-persist");

    if (permissions && permissions.firstVisit === false) {
      location.setGps();
    } else {
      history.push("/intro");
    }
  }, []);

  useEffect(() => {
    if ("orientation" in screen) {
      document.documentElement.requestFullscreen();
      screen.orientation.lock("portrait-primary").then(null, function(error) {
        document.exitFullscreen();
      });
    }
  }, []);

  const toggleShutterPress = () => {
    return setShutterPress(!shutterPress);
  };

  const toggleSearchFocus = focused => {
    return setSearchFocus(focused);
  };

  return (
    <ThemeProvider theme={themeMode}>
      <div className="App">
        <GlobalStyles />

        <Switch>
          <Route exact path="/">
            <HomePage
              toggleTheme={toggleTheme}
              toggleSearchFocus={toggleSearchFocus}
              searchFocus={searchFocus}
              theme={theme}
            />

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
            <CameraPage
              setAppCluster={setAppCluster}
              shutterPress={shutterPress}
              toggleSearchFocus={toggleSearchFocus}
            />
            <CameraNav
              shutterPress={shutterPress}
              toggleShutterPress={toggleShutterPress}
              toggleSearchFocus={toggleSearchFocus}
            />
          </Route>
          <Route exact path="/camera/results">
            <ClusterPage appCluster={appCluster} />
            <BottomNav />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
};

export default App;
