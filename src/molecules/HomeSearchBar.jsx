import React, { useState, useEffect } from "react";
import styled from "styled-components";
import lensImg from "../images/lens.svg";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";

const SearchPageContainer = styled.div`
  position: relative;
  z-index: 1;
  align-items: center;
  margin-top: 0;
  width: 85%;
`;
const SearchContainer = styled.form`
  display: flex;
  flex-direction: start;
  align-items: center;
  border: ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.searchBackground};
  width: 100%;
  box-sizing: border-box;
  border-radius: ${props =>
    props.searchTerm !== "" ? "20px 20px 0 0" : "20px"};
  height: 36px;
  font-size: 18px;
  margin-top: 20px;
  color: red;
`;

const InputField = styled.input`
  border: none;
  outline: none;
  color: ${({ theme }) => theme.searchText};
  background: ${({ theme }) => theme.searchBackground};
  font-size: 18px;
  line-height: 25px;
  width: inherit;
  margin-right: 10px;
  ::placeholder {
    color: ${({ theme }) => theme.searchText};
  }
  /* identical to box height */
`;
const Img = styled.img`
  height: 24px;
  margin-left: 14px;
  margin-right: 14px;
`;
const DropList = styled.ul`
  position: absolute;
  border: ${({ theme }) => theme.border};
  border-top: none;
  width: 100%;
  list-style-type: none;
  text-align: none;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.searchBackground};
  box-sizing: border-box;
  border-radius: 0 0 20px 20px;
`;
const DropListItem = styled.li`
  margin: 0;
  color: ${({ theme }) => theme.searchText};
  padding: 10px 0;
  width: 100%;
  margin-left: 9%;
`;

const GET_MATERIALS = gql`
  query getAllMaterials {
    materials {
      description
      material_id
      # long_description
    }
  }
`;
const HomeSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState([]);
  const { loading, data } = useQuery(GET_MATERIALS);
  const history = useHistory();

  // gets the materials and filters the material to the search term
  useEffect(() => {
    if (data && !loading) {
      const newList = data.materials.filter(mat =>
        mat.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFiltered(newList);
    }
  }, [searchTerm]);

  // sets the selected suggestion to be the search term
  const search = value => {
    const foundMaterial = data.materials.filter(mat =>
      mat.description.toLowerCase().includes(value.toLowerCase())
    )[0];
    console.log(foundMaterial);
    history.push(`/material/${foundMaterial.material_id}`);
  };

  // displays the filtered suggestions
  const renderFiltered = () => {
    if (searchTerm === "") {
      return null;
    } else {
      return (
        <DropList>
          {filtered.map(mat => (
            <DropListItem
              key={mat.material_id}
              onClick={() => search(mat.description)}
            >
              {mat.description}
            </DropListItem>
          ))}
        </DropList>
      );
    }
  };

  // submits and continues to the material page.
  const handleSubmit = e => {
    e.preventDefault();
    search(searchTerm);
  };

  return (
    <SearchPageContainer>
      <SearchContainer onSubmit={handleSubmit} searchTerm={searchTerm}>
        <Img src={lensImg} alt="lens" />
        <InputField
          type="text"
          placeholder="enter search term"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </SearchContainer>
      {renderFiltered()}
      {/* <Toggle toggleTheme={toggleTheme} theme={theme} /> */}
    </SearchPageContainer>
  );
};
export default HomeSearchBar;
