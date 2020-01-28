import React from "react";
import HomeHeader from "../atoms/HomeHeader";
import HomeSearchBar from "../atoms/HomeSearchBar";
import HomeIntro from "../molecules/HomeIntro";
import CategoryGrid from "../molecules/CategoryGrid";

const HomePage = () => {
  return (
    <div>
      <HomeHeader />
      <HomeSearchBar />
      <HomeIntro />
      <CategoryGrid />
    </div>
  );
};

export default HomePage;
