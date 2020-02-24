import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import GridCard from "./GridCard";
import placeholderImg from "../images/category_placeholder.svg";
import { GET_CATEGORIES } from "../App.js";

const GridContainer = styled.div`
  display: grid;
  margin-top: 36px;
  width: 100%;
  gap: 26px 22px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  // grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  margin-bottom: 100px;
`;

const CategoryGrid = () => {
  const history = useHistory();
  const categories = useQuery(GET_CATEGORIES);

  const handleCategoryClick = id => {
    history.push(`/category/${id}`);
  };
  return (
    <>
      {categories && !categories.loading && (
        <GridContainer>
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
