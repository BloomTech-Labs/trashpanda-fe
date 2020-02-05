import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
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
  margin-bottom: 105px;
`;

const CategoryPage = ({ categorylist, materiallist }) => {
  const [materials, setMaterials] = useState([]);
  const { categoryId } = useParams();
  const history = useHistory();
  const [currentFamily, setCurrentFamily] = useState({ description: "" });

  //Find the family(category) with id in params.
  useEffect(() => {
    if (categorylist.length > 0) {
      const newFamily = categorylist.find(fam => {
        return fam.family_id == categoryId;
      });
      setCurrentFamily(newFamily);
    }
  }, [categoryId, categorylist]);

  // Then change our list of materials everytime the family(category) changes
  useEffect(() => {
    if (currentFamily && currentFamily.material_ids) {
      if (materiallist && materiallist.length > 0) {
        const newMaterials = currentFamily.material_ids.map(matId => {
          return materiallist.find(mat => {
            return mat.material_id == matId;
          });
        });

        //Filter any undefineds (could not find material from the materiallist )
        const filteredList = newMaterials.filter(mat => mat !== undefined);
        setMaterials(filteredList);
      }
    }
  }, [currentFamily]);

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

  const onClick = materialId => {
    history.push(`/material/${materialId}`);
  };

  return (
    <Root>
      <Header>
        <HeaderTitle>{currentFamily.description}</HeaderTitle>
      </Header>
      <MaterialGrid>
        {materials.map((mat, key) => (
          <CategoryGridCard
            image={placeholderImg}
            name={mat.description}
            key={key}
            onClick={() => onClick(mat.material_id)}
          />
        ))}
      </MaterialGrid>
    </Root>
  );
};

export default CategoryPage;
