import React, { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./organisms/HomePage";
import CategoryPage from "./organisms/CategoryPage";
import SubCategoryPage from "./organisms/SubCategoryPage";
import { Switch, Route, useHistory } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MaterialPage from "./organisms/MaterialPage";
import { useQuery } from "@apollo/react-hooks";
import SplashPage from "./organisms/SplashPage";
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
import SplashTeam from "./molecules/SplashTeam";
// import CameraNav from "./molecules/CameraNav";
import styled from "styled-components";

const MobileConstraint = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;

const DesktopConstraint = styled.div`
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
  background-color: white;
`;

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

export function isDesktop() {
  const vw = window.innerWidth;

  return vw > 875;
}

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

    if (isDesktop()) {
      history.push("/splash");
    } else {
      if (permissions && permissions.firstVisit === false) {
        location.setGps();
      } else {
        history.push("/intro");
      }
    }
  }, []);

  return (
    <ThemeProvider theme={themeMode}>
      <div className="App">
        <GlobalStyles />

        <MobileConstraint>
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

              <ClusterPage
                setShutterPress={setShutterPress}
                appCluster={appCluster}
              />
            </Route>
          </Switch>
        </MobileConstraint>
        <DesktopConstraint>
          <Route exact path="/splash">
            <SplashPage />
          </Route>
          <Route exact path="/splash/team">
            <SplashTeam />
          </Route>
        </DesktopConstraint>
      </div>
    </ThemeProvider>
  );
};

export default App;
