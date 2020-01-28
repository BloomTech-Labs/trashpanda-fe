import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CategoryGridCard from "./CategoryGridCard";
import placeholderImg from "../images/category_placeholder.svg";

const GridContainer = styled.div`
  display: grid;
  margin-top: 36px;
  width: 100%;
  gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
`;

const CategoryGrid = () => {
  const [categories, setCategories] = useState([
    { image: placeholderImg, name: "Batteries" }
  ]);

  //Temporary population
  useEffect(() => {
    const newCategories = [];
    for (let i = 0; i < 13; i++) {
      newCategories.push({ image: placeholderImg, name: "Batteries" });
    }
    setCategories(newCategories);
  }, []);

  return (
    <GridContainer>
      {categories.map((category, key) => (
        <CategoryGridCard
          image={category.image}
          name={category.name}
          key={key}
        />
      ))}
    </GridContainer>
  );
};

export default CategoryGrid;
