import React from "react";
import HomeSearchBar from "../molecules/HomeSearchBar";
import CategoryGrid from "../molecules/CategoryGrid";
import TakeAPhoto from "../molecules/TakeAPhoto";

const HomePage = ({ searchFocus, setSearchFocus }) => {
  return (
    <>
      <TakeAPhoto />
      <HomeSearchBar
        searchFocus={searchFocus}
        setSearchFocus={setSearchFocus}
      />
      <CategoryGrid searchFocus={searchFocus} />
    </>
  );
};

export default HomePage;
