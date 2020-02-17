import React, { useState, useEffect } from "react";
import styled from "styled-components";
import arrowImg from "../images/arrow_back.svg";
import homeImg from "../images/home.svg";
import { Link, useLocation, useHistory } from "react-router-dom";

import cameraImg from "../images/camera_center_icon.svg";

const Container = styled.div`
  width: 100vw;
  height: 56px;

  position: fixed;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BottomBandSquare = styled.div`
  width: 40vw;
  height: 56px;

  background: ${({ theme }) => theme.bottomNav};
  position: fixed;
  bottom: 0;
`;

const BottomBandLeft = styled.div`
  left: 39vw;
  width: 11vw;
  height: 56px;

  background: ${({ theme }) => theme.bottomNav};
  position: fixed;
  bottom: 0;
`;

const BottomBandRight = styled.div`
  right: 39vw;
  width: 11vw;
  height: 56px;

  background: ${({ theme }) => theme.bottomNav};
  position: fixed;
  bottom: 0;
`;

const Img = styled.img`
  height: 24px;

  cursor: pointer;
`;

const InnerContainer = styled.div`
  margin: 0px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
`;

const CameraButton = styled.button`
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.bottomNavCameraPg};

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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

const BottomNav = () => {
  const [isHome, setIsHome] = useState(true);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    setIsHome(location.pathname === "/");
  }, [location.pathname]);

  const handleBackClick = () => {
    history.goBack();
  };

  const handleCameraBtn = () => {
    history.push(`/camera`);
  };

  return (
    <Container>
      <InnerContainer>
        <BottomBandSquare style={{ left: 0 }} />
        <BottomBandLeft />
        <CameraButton onClick={handleCameraBtn}>
          <CameraImage src={cameraImg} alt="camera" />
        </CameraButton>
        <BottomBandRight />
        <BottomBandSquare style={{ right: 0 }} />
        {isHome ? null : <Img onClick={handleBackClick} src={arrowImg} />}

        {isHome ? null : (
          <Link to="/">
            <Img src={homeImg} />
          </Link>
        )}
      </InnerContainer>
    </Container>
  );
};

export default BottomNav;
