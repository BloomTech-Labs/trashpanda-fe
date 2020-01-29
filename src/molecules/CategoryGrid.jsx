import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import GridCard from "./GridCard";
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
  const history = useHistory();
  //Temporary population
  useEffect(() => {
    const newCategories = [];
    for (let i = 0; i < 13; i++) {
      newCategories.push({ image: placeholderImg, name: "Batteries", id: 2 });
    }
    setCategories(newCategories);
  }, []);

  const handleCategoryClick = id => {
    history.push(`/category/${id}`);
  };

  return (
    <GridContainer>
      {categories.map((category, key) => (
        <GridCard
          image={category.image}
          name={category.name}
          key={key}
          onClick={() => handleCategoryClick(category.id)}
        />
      ))}
    </GridContainer>
  );
};

export default CategoryGrid;
