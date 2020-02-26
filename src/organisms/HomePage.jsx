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

const HomePage = ({ theme, toggleTheme, searchFocus, toggleSearchFocus }) => {
  useEffect(() => {
    document.getElementById("homeContainer").addEventListener(
      "click",
      function() {
        document.documentElement.requestFullscreen();
        screen.orientation.lock("natural");
      },
      false
    );
    console.log(window.screen.orientation.type);
  }, []);

  return (
    <Container id="homeContainer" onClick={() => toggleSearchFocus(false)}>
      <TopContainer>
        <HomeSearchBar
          searchFocus={searchFocus}
          toggleSearchFocus={toggleSearchFocus}
        />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </TopContainer>
      <CategoryGrid />
    </Container>
  );
};

export default HomePage;
