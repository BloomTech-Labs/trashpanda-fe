import React from "react";
import HomeHeader from "../atoms/HomeHeader";
import HomeSearchBar from "../atoms/HomeSearchBar";
import HomeIntro from "../molecules/HomeIntro";
import CategoryGrid from "../molecules/CategoryGrid";

import styled from "styled-components";

const Container = styled.div`
  margin: 0px 16px;
`;

const HomePage = () => {
  return (
    <Container>
      <HomeHeader />
      <HomeSearchBar />
      <HomeIntro />
      <CategoryGrid />
    </Container>
  );
};

export default HomePage;
