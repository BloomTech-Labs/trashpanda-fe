import React from "react";
import HomeHeader from "../atoms/HomeHeader";
import HomeSearchBar from "../atoms/HomeSearchBar";
import HomeIntro from "../molecules/HomeIntro";

const HomePage = () => {
  return (
    <div>
      <HomeHeader />
      <HomeSearchBar />
      <HomeIntro />
    </div>
  );
};

export default HomePage;
