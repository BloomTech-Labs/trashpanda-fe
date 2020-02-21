import React, { useState, useEffect } from "react";
import styled from "styled-components";
import searchIconDarkMode from "../images/search_icon_camera_dark.svg";
import homeIconDarkMode from "../images/home_icon_camera_dark.svg";
import { Link, useLocation, useHistory } from "react-router-dom";

import cameraBtnImgDarkMode from "../images/camera_icon_camera.svg";

const Container = styled.div`
  max-width: 575px;
  width: 100vw;
  height: 56px;

  position: fixed;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  height: 24px;
  z-index: 4;
  position: absolute;
  align-items: center;
  cursor: pointer;
  padding: 13px;
  margin-right: 100px;
`;

const InnerContainer = styled.div`
  margin: 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  max-width: 573px;
`;

const CameraButton = styled.button`
  outline: none;
  border: none;
  background-color: none;
  padding: 16px;
  border-radius: 100px;
  z-index: 2;
  position: fixed;
  bottom: 17px;
  left: 50%;

  transform: translate(-50%, ${props => (props.isHome ? `6` : `-15`)}%);

  cursor: pointer;
`;

const CameraImage = styled.img``;

const CameraNav = () => {
  const [isHome, setIsHome] = useState(true);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    setIsHome(location.pathname === "/");
  }, [location.pathname]);

  const handleBackClick = () => {
    history.push("/");
  };

  const handleCameraBtn = () => {
    history.push(`/camera`);
  };

  return (
    <Container>
      <InnerContainer>
        <BottomBandSquare />
        <BottomBandLeft />
        <CameraButton onClick={handleCameraBtn}>
          <CameraImage src={cameraBtnImgDarkMode} alt="camera" />
        </CameraButton>
        <BottomBandRight />
        <BottomBandSquare />
        {isHome ? null : (
          <Img onClick={handleBackClick} src={searchIconDarkMode} />
        )}

        {isHome ? null : (
          <Link
            to="/"
            style={{
              zIndex: 7,
              position: "absolute",
              left: "85%",
              bottom: "53px"
            }}
          >
            <Img src={homeIconDarkMode} />
          </Link>
        )}
      </InnerContainer>
    </Container>
  );
};

export default CameraNav;
