import React, { useState, useEffect } from "react";
import styled from "styled-components";
import arrowImg from "../images/arrow_back.svg";
import homeImg from "../images/home.svg";
import { Link, useLocation, useHistory } from "react-router-dom";

import cameraImg from "../images/camera.svg";

const Container = styled.div`
  width: 100vw;
  height: 56px;

  background: #336b68;
  position: fixed;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
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

  background: #404040;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  border-radius: 100px;

  position: absolute;
  bottom: 0px;
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
  // const CameraButton = getCameraButton(isHome);
  return (
    <Container>
      <InnerContainer>
        <CameraButton isHome={isHome}>
          <CameraImage src={cameraImg} alt="camera" />
        </CameraButton>
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
