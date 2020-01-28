import React from "react";
import HomeSearchBar from "../molecules/HomeSearchBar";
import HomeIntro from "../molecules/HomeIntro";
import CategoryGrid from "../molecules/CategoryGrid";

import styled from "styled-components";

const Container = styled.div`
  margin: 0px 16px;
`;

const HomePage = () => {
  return (
    <Container>
      <HomeSearchBar />
      <HomeIntro />
      <CategoryGrid />
    </Container>
  );
};

export default HomePage;
