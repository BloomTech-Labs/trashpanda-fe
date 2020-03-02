import React, { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./organisms/HomePage";
import CategoryPage from "./organisms/CategoryPage";
import SubCategoryPage from "./organisms/SubCategoryPage";
import { Switch, Route, useHistory } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MaterialPage from "./organisms/MaterialPage";
import { useQuery } from "@apollo/react-hooks";

import gql from "graphql-tag";
import LocationsPage from "./organisms/LocationsPage";
import TopNav from "./molecules/TopNav";
import TutorialPage from "./organisms/TutorialPage";
import CameraPage from "./organisms/CameraPage";
import ClusterPage from "./organisms/ClusterPage";
import location from "./utils/UserLocation";
import { lightTheme, darkTheme } from "./molecules/theme";
import { useDarkMode } from "./molecules/useDarkMode";
import { GlobalStyles } from "./molecules/global";
// import CameraNav from "./molecules/CameraNav";

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

  const categories = useQuery(GET_CATEGORIES);
  const materials = useQuery(GET_MATERIALS);

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

  return (
    <ThemeProvider theme={themeMode}>
      <div className="App">
        <GlobalStyles />

        <Switch>
          <Route exact path="/">
            <TopNav
              searchFocus={searchFocus}
              theme={theme}
              toggleTheme={toggleTheme}
              shutterPress={shutterPress}
              setShutterPress={setShutterPress}
            />
            <HomePage
              setSearchFocus={setSearchFocus}
              searchFocus={searchFocus}
            />
          </Route>
          <Route exact path="/category/:categoryId">
            <TopNav
              searchFocus={searchFocus}
              theme={theme}
              toggleTheme={toggleTheme}
              shutterPress={shutterPress}
              setShutterPress={setShutterPress}
            />
            <CategoryPage categories={categories} materials={materials} />
          </Route>
          <Route exact path="/material/:materialId">
            <TopNav
              searchFocus={searchFocus}
              theme={theme}
              toggleTheme={toggleTheme}
              shutterPress={shutterPress}
              setShutterPress={setShutterPress}
            />
            <MaterialPage />
          </Route>
          <Route exact path="/material/:materialId/locations">
            <TopNav
              searchFocus={searchFocus}
              theme={theme}
              toggleTheme={toggleTheme}
              shutterPress={shutterPress}
              setShutterPress={setShutterPress}
            />
            <LocationsPage />
          </Route>
          <Route exact path="/subcategory/:subCategoryId">
            <TopNav
              searchFocus={searchFocus}
              theme={theme}
              toggleTheme={toggleTheme}
              shutterPress={shutterPress}
              setShutterPress={setShutterPress}
            />
            <SubCategoryPage />
          </Route>
          <Route exact path="/intro">
            <TutorialPage />
          </Route>
          <Route exact path="/camera">
            <TopNav
              searchFocus={searchFocus}
              theme={theme}
              toggleTheme={toggleTheme}
              shutterPress={shutterPress}
              setShutterPress={setShutterPress}
            />

            <CameraPage
              theme={theme}
              setAppCluster={setAppCluster}
              shutterPress={shutterPress}
              setShutterPress={setShutterPress}
              setSearchFocus={setSearchFocus}
              setShutterPress={setShutterPress}
            />
          </Route>
          <Route exact path="/camera/results">
            <TopNav
              searchFocus={searchFocus}
              theme={theme}
              toggleTheme={toggleTheme}
              shutterPress={shutterPress}
              setShutterPress={setShutterPress}
            />

            <ClusterPage appCluster={appCluster} />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
};

export default App;
