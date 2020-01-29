import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import bgImg from "../images/batteries.jpg";
import CategoryGridCard from "../molecules/GridCard";
import placeholderImg from "../images/category_placeholder.svg";

const Root = styled.div``;

const HeaderTitle = styled.h2`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  font-weight: bold;
  color: #404040;
  font-size: 36px;
`;

const MaterialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 33px;
  margin: 39px 24px;
`;

const CategoryPage = () => {
  const [materials, setMaterials] = useState([]);
  //Setup for future requests from backend.
  const { id } = useParams();

  //Temporary population of materials list.
  useEffect(() => {
    const newMaterials = [
      { name: "Lithium", image: placeholderImg },
      { name: "Alkaline", image: placeholderImg },
      { name: "Laptop", image: placeholderImg }
    ];
    setMaterials(newMaterials);
  }, []);

  //Getting image url from backend.
  //Temporary image imported.
  const Header = styled.div`
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 214px;
    position: relative;
  `;

  return (
    <Root>
      <Header>
        <HeaderTitle>Batteries</HeaderTitle>
      </Header>
      <MaterialGrid>
        {materials.map((mat, key) => (
          <CategoryGridCard image={mat.image} name={mat.name} key={key} />
        ))}
      </MaterialGrid>
    </Root>
  );
};

export default CategoryPage;
