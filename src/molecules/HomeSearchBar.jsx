import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import lensImg from "../images/lens.svg";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import { inputFocused } from "../utils/inputFocused";

const SearchPageContainer = styled.div`
  position: relative;
  z-index: 1;
  align-items: center;
  padding-top: 34px;
  margin: 0 16px;
`;
const SearchContainer = styled.form`
  display: flex;
  flex-direction: start;
  align-items: center;
  border: ${({ theme, searchFocus }) =>
    searchFocus ? theme.focusedBorder : theme.border};
  background: ${({ theme }) => theme.searchBackground};
  width: 100%;
  box-sizing: border-box;
  border-radius: ${props => (props.searchTerm !== "" ? "5px 5px 0 0" : "5px")};
  height: 36px;
  font-size: 18px;
  color: red;
`;

const InputField = styled.input`
  border: none;
  outline: none;
  color: ${({ theme }) => theme.searchText};
  background: ${({ theme }) => theme.searchBackground};
  font-family: Muli;
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
  border-radius: 0 0 5px 5px;
`;
const DropListItem = styled.li`
  margin: 0;
  color: ${({ theme }) => theme.searchText};
  padding: 10px 0;
  width: 100%;
  margin-left: 9%;
`;
const FilteredContainer = styled.div``;

const GET_MATERIALS = gql`
  query getAllMaterials {
    materials {
      description
      material_id
      # long_description
    }
  }
`;
const HomeSearchBar = ({ searchFocus, setSearchFocus }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState([]);
  const searchBarRef = useRef();
  const { loading, data } = useQuery(GET_MATERIALS);
  const history = useHistory();

  useEffect(() => {
    if (searchFocus) {
      searchBarRef.current.focus();
    }
  }, [searchFocus]);

  useEffect(() => {
    //detect whether the input field has focus and set a flag that we can use to hide the navbar.

    inputFocused(setSearchFocus);
  }, []);

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
    setSearchFocus(false);
  };

  return (
    <SearchPageContainer>
      <SearchContainer
        searchFocus={searchFocus}
        onSubmit={handleSubmit}
        searchTerm={searchTerm}
        style={{
          borderRadius:
            searchTerm !== "" && filtered.length === 0 ? "5px" : null
        }}
      >
        <Img src={lensImg} alt="lens" />
        <InputField
          ref={searchBarRef}
          type="text"
          placeholder="enter search term"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </SearchContainer>
      <FilteredContainer
        style={{ display: filtered.length === 0 ? "none" : null }}
      >
        {renderFiltered()}
      </FilteredContainer>
    </SearchPageContainer>
  );
};
export default HomeSearchBar;
