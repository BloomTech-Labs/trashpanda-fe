import React from "react";
import styled from "styled-components";
import CategoryGridCard from "../atoms/CategoryGridCard";
import placeholderImg from "../images/category_placeholder.svg";

const GridContainer = styled.div`
  display: grid;
  margin-top: 36px;
  width: 100%;
  gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
`;

const CategoryGrid = () => {
  return (
    <GridContainer>
      <CategoryGridCard image={placeholderImg} name="Batteries" />
      <CategoryGridCard image={placeholderImg} name="Batteries" />
      <CategoryGridCard image={placeholderImg} name="Batteries" />
      <CategoryGridCard image={placeholderImg} name="Batteries" />
      <CategoryGridCard image={placeholderImg} name="Batteries" />
      <CategoryGridCard image={placeholderImg} name="Batteries" />
      <CategoryGridCard image={placeholderImg} name="Batteries" />
      <CategoryGridCard image={placeholderImg} name="Batteries" />
      <CategoryGridCard image={placeholderImg} name="Batteries" />
      <CategoryGridCard image={placeholderImg} name="Batteries" />
      <CategoryGridCard image={placeholderImg} name="Batteries" />
      <CategoryGridCard image={placeholderImg} name="Batteries" />
      <CategoryGridCard image={placeholderImg} name="Batteries" />
    </GridContainer>
  );
};

export default CategoryGrid;
