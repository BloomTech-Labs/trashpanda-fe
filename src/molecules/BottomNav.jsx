import React from "react";
import styled from "styled-components";
import arrowImg from "../images/arrow_back.svg";
import homeImg from "../images/home.svg";

import cameraImg from "../images/camera.svg";

import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 56px;

  background: #336b68;
  position: sticky;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled.img`
  height: 24px;
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

  transform: translate(-50%, -15%);
`;

const CameraImage = styled.img``;

const BottomNav = () => {
  return (
    <Container>
      <InnerContainer>
        <Img src={arrowImg} />

        <CameraButton>
          <CameraImage src={cameraImg} alt="camera" />
        </CameraButton>
        <Link to="/">
          <Img src={homeImg} />
        </Link>
      </InnerContainer>
    </Container>
  );
};

export default BottomNav;
