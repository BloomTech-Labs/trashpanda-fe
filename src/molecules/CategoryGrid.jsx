import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import GridCard from "./GridCard";
import placeholderImg from "../images/category_placeholder.png";
import { GET_CATEGORIES } from "../App.js";
import Spinner from "../atoms/Spinner";

const GridContainer = styled.div`
  display: grid;
  margin-top: 36px;
  width: 100%;
  gap: 26px 25px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  margin-bottom: 100px;
  opacity: ${({ searchFocus }) => (searchFocus ? "0.2" : "1")}};
`;

const CategoryGrid = ({ searchFocus }) => {
  const history = useHistory();
  const categories = useQuery(GET_CATEGORIES);

  const handleCategoryClick = id => {
    history.push(`/category/${id}`);
  };
  return (
    <>
      {categories && categories.loading && <Spinner />}
      {categories && !categories.loading && (
        <GridContainer searchFocus={searchFocus}>
          {categories.data.families.map((category, key) => (
            <GridCard
              image={
                category.image_url.length > 0
                  ? category.image_url
                  : placeholderImg
              }
              name={category.description}
              key={key}
              onClick={() => handleCategoryClick(category.family_id)}
            />
          ))}
        </GridContainer>
      )}
    </>
  );
};

export default CategoryGrid;
