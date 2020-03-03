import React, { useState, useEffect } from "react";
import styled from "styled-components";
import arrowImg from "../images/back_arrow_lite.svg";
import { Route, Switch, Link, useLocation, useHistory } from "react-router-dom";
import Toggle from "./ToggleTheme";
import cameraBtnImgDarkMode from "../images/camera_icon_camera.svg";
import cameraBtnImgLightMode from "../images/camera_icon_camera_light.svg";

const NavBar = styled.div`
  position: absolute;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  left: 16px;
  right: 16px;
  z-index: 7;
  margin-top: 20px;
`;

const Title = styled.h1`
  font-family: Muli;
  font-size: 20px;
  margin: 0;
  color: ${({ theme }) => (theme.name === "Light" ? "#404040" : "#FFFFFF")};
`;

const Svg = styled.svg`
  fill: ${({ theme }) => {
    console.log(theme);
    if (theme === "light") {
      return "#404040";
    } else {
      return "#FFFFFF";
    }
  }};
`;
const HomeIcon = ({ onClick, theme }) => {
  return (
    <div onClick={onClick}>
      <Svg
        theme={theme}
        width="22"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.852 15.325h-5.94a.882.882 0 00-.882.882V24h1.764v-6.91h4.176V24h1.764v-7.793a.882.882 0 00-.882-.882z" />
        <path d="M11.465.222l9.998 8.851c.19.167.298.408.298.66v13.38a.882.882 0 01-.883.882h-5.991c-.975 0-1.764-.79-1.764-1.764h6.873v-12.1L10.88 2.06l-9.116 8.07v12.1h7.047v1.764H.882A.882.882 0 010 23.113V9.733c0-.252.108-.493.297-.66L10.295.222a.882.882 0 011.17 0z" />
      </Svg>
    </div>
  );
};

const BackArrowIcon = ({ onClick, theme }) => {
  return (
    <div onClick={onClick}>
      <Svg
        theme={theme}
        width="22"
        height="20"
        viewBox="0 0 22 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22 9.54545H2.69388L10.8922 1.01372L9.87755 0L0 10L9.87755 20L10.8788 18.9872L2.69388 10.9091H22V9.54545Z" />
      </Svg>
    </div>
  );
};

const TopNav = ({ theme, toggleTheme, setShutterPress, shutterPress }) => {
  const history = useHistory();

  const handleBackClick = () => {
    history.goBack();
  };

  const handleCameraBackClick = () => {
    shutterPress ? setShutterPress(false) : history.goBack();
  };

  const handleHome = () => {
    setShutterPress(false);
    history.push("/");
  };

  return (
    <NavBar>
      <Switch>
        <Route exact path="/">
          <Title>Trash Panda</Title>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </Route>

        <Route exact path="/camera">
          <BackArrowIcon onClick={handleCameraBackClick} />
          <HomeIcon onClick={handleHome} />
        </Route>

        <Route>
          <BackArrowIcon theme={theme} onClick={handleBackClick} />
          <HomeIcon theme={theme} onClick={handleHome} />
        </Route>
      </Switch>
    </NavBar>
  );
};

export default TopNav;
