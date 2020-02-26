import React from "react";
import HomeSearchBar from "../molecules/HomeSearchBar";
import CategoryGrid from "../molecules/CategoryGrid";
import styled from "styled-components";

import Toggle from "../molecules/ToggleTheme";

const Container = styled.div`
  margin: 0px 16px;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const HomePage = ({ theme, toggleTheme, searchFocus, setSearchFocus }) => {
  return (
    <Container onClick={() => toggleSearchFocus(false)}>
      <TopContainer>
        <HomeSearchBar
          searchFocus={searchFocus}
          setSearchFocus={setSearchFocus}
        />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </TopContainer>
      <CategoryGrid />
    </Container>
  );
};

export default HomePage;
