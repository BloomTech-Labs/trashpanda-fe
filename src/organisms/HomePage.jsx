import React from "react";
import HomeSearchBar from "../molecules/HomeSearchBar";
import CategoryGrid from "../molecules/CategoryGrid";
import styled from "styled-components";

const Container = styled.div`
  margin: 0px 16px;
`;

const HomePage = () => {
  return (
    <Container>
      <HomeSearchBar />
      <CategoryGrid />
    </Container>
  );
};

export default HomePage;
