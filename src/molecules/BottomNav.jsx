import React, { useState, useEffect } from "react";
import styled from "styled-components";
import arrowImg from "../images/back_arrow_lite.svg";
import homeImg from "../images/home_icon_lite.svg";
import { Link, useLocation, useHistory } from "react-router-dom";

import cameraImg from "../images/camera_center_icon.svg";

const Container = styled.div`
  max-width: 573px;
  width: 100vw;
  height: 56px;
  display: flex;

  //force navbar to bottom on mobile if search focused
  position: ${({ searchFocus }) => {
    if (searchFocus && window.innerWidth < 575) {
      return "absolute";
    }
    return "fixed";
  }};
  bottom: 0;
  align-items: center;
  justify-content: center;
`;

const BottomBandSquare = styled.div`
  flex-grow: 1;
  height: 56px;

  background: ${({ theme }) => theme.bottomNav};
  border: none;
  bottom: 0;
`;

const BottomBandLeft = styled.div`
  right: 49%;
  border: none;
  width: 77px;
  height: 56px;
  clip-path: polygon(
    0% 0%,
    4% 0%,
    21% 1.9%,
    25% 3.6%,
    33% 8.95%,
    42% 18.9%,
    51% 31.9%,
    60% 41.6%,
    69% 49.5%,
    72% 51.7%,
    81% 56.5%,
    88% 58.5%,
    93% 59%,
    97% 59.5%,
    100% 59.5%,
    140% 59.5%,
    100% 100%,
    0% 100%
  );
  background: ${({ theme }) => theme.bottomNav};
  bottom: 0;
  margin: 0;
`;

const BottomBandRight = styled.div`
  left: 49%;
  border: none;
  width: 77px;
  height: 56px;
  clip-path: polygon(
    -10% 100%,
    -9% 59.5%,
    0% 59.5%,
    3% 59.5%,
    7% 59%,
    12% 58.5%,
    19% 56.5%,
    28% 51.7%,
    31% 49.5%,
    40% 41.6%,
    49% 31.9%,
    58% 18.9%,
    67% 8.95%,
    75% 3.6%,
    79% 1.9%,
    96% 0%,
    105% 0%,
    110% 100%,
    10% 100%
  );
  background: ${({ theme }) => theme.bottomNav};
  margin: 0;
  bottom: 0;
`;

const Img = styled.img`
  height: 24px;
  z-index: 4;
  position: absolute;
  align-items: center;
  cursor: pointer;
  padding: 13px;
`;

const InnerContainer = styled.div`
  margin: 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  max-width: 575px;
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

const BottomNav = ({ searchFocus }) => {
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
    <Container searchFocus={searchFocus}>
      <InnerContainer>
        <BottomBandSquare />
        <BottomBandLeft />
        <CameraButton onClick={handleCameraBtn}>
          <CameraImage src={cameraImg} alt="camera" />
        </CameraButton>
        <BottomBandRight />
        <BottomBandSquare />
        {isHome ? null : <Img onClick={handleBackClick} src={arrowImg} />}

        {isHome ? null : (
          <Link
            to="/"
            style={{
              zIndex: 7,
              position: "absolute",
              left: "90%",
              bottom: "50px"
            }}
          >
            <Img src={homeImg} />
          </Link>
        )}
      </InnerContainer>
    </Container>
  );
};

export default BottomNav;
