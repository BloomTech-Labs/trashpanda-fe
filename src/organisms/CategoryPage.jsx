import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import GridCard from "../molecules/GridCard";
import placeholderImg from "../images/category_placeholder.svg";

const Root = styled.div``;

const HeaderTitle = styled.h2`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  text-align: center;

  color: #000000;

  margin: 20px 0px 39px 0px;
  padding: 0;
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

  const onClick = materialId => {
    history.push(`/material/${materialId}`);
  };

  return (
    <Root>
      <HeaderTitle>{currentFamily.description}</HeaderTitle>
      <MaterialGrid>
        {materials.map((mat, key) => (
          <GridCard
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
