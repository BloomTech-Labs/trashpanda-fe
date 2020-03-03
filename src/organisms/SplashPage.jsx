import React from "react";

import styled from "styled-components";
import SplashNav from "../molecules/SplashNav";
import SplashMainContent from "../molecules/SplashMainContent";

const Container = styled.div``;
const SplashPage = () => {
  return (
    <Container>
      <SplashNav />
      <SplashMainContent />
    </Container>
  );
};

export default SplashPage;
