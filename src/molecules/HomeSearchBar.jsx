import React, { useState } from "react";
import styled from "styled-components";
import lensImg from "../images/lens_dark.svg";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid #404040;

  width: 100%;
  box-sizing: border-box;
  border-radius: 20px;
  height: 36px;
  font-size: 18px;
  margin-top: 20px;
`;

const InputField = styled.input`
  border: none;
  outline: none;
  color: #847d7d;
  font-size: 18px;
  line-height: 25px;
  width: 100%;
  margin-right: 10px;
  /* identical to box height */
`;

const Img = styled.img`
  height: 24px;
  margin-left: 14px;
  margin-right: 14px;
`;

const HomeSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SearchContainer>
      <Img src={lensImg} alt="lens" />
      <InputField
        type="text"
        placeholder="enter search term"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
    </SearchContainer>
  );
};

export default HomeSearchBar;
