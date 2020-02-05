import React from "react";
import HomeSearchBar from "../molecules/HomeSearchBar";
import HomeIntro from "../molecules/HomeIntro";
import CategoryGrid from "../molecules/CategoryGrid";
import styled from "styled-components";

const Container = styled.div`
  margin: 0px 16px;
`;

const HomePage = ({ categorylist }) => {
  return (
    <Container>
      <HomeSearchBar />
      {/* <HomeIntro /> */}
      <CategoryGrid categorylist={categorylist} />
    </Container>
  );
};

export default HomePage;
