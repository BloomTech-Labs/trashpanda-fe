import React from "react";

import styled from "styled-components";
import splashImg from "../images/splash_image.svg";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 99px;
`;

const Image = styled.img``;

const OverlapTitle = styled.h2``;

const SplashMainContent = () => {
  return (
    <Container>
      <Image src={splashImg} />
    </Container>
  );
};

export default SplashMainContent;
