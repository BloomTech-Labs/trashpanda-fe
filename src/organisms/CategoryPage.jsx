import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import GridCard from "../molecules/GridCard";
import placeholderImg from "../images/category_placeholder.svg";
import { useQuery } from "@apollo/react-hooks";
import { GET_CATEGORIES, GET_MATERIALS } from "../App.js";

const Root = styled.div``;

const HeaderTitle = styled.h2`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  text-align: center;

  color: ${({ theme }) => theme.titleText};

  margin: 20px 0px 39px 0px;
  padding: 0;
`;

const MaterialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 26px 22px;
  margin: 39px 13px;
  margin-bottom: 105px;
`;

const CategoryPage = () => {
  const { categoryId } = useParams();
  const history = useHistory();
  const categories = useQuery(GET_CATEGORIES);
  const materials = useQuery(GET_MATERIALS);
  const [currentFamily, setCurrentFamily] = useState();
  const [materialList, setMaterialList] = useState();

  useEffect(() => {
    // update cache on reload
    categories.refetch();
    materials.refetch();
  }, []);

  useEffect(() => {
    if (categories && !categories.loading && categories.data) {
      const family = categories.data.families.find(
        family => parseInt(categoryId) === family.family_id
      );
      setCurrentFamily(family);
    }

    if (materials && !materials.loading && materials.data && currentFamily) {
      const familyMaterials = materials.data.materials
        .map(material => {
          if (
            currentFamily.material_ids.find(id => material.material_id === id)
          ) {
            return material;
          }
        })
        .filter(exists => exists);
      setMaterialList(familyMaterials);
    }
  }, [categories, materials, currentFamily]);

  const onClick = materialId => {
    history.push(`/material/${materialId}`);
  };

  return (
    <Root>
      {currentFamily && <HeaderTitle>{currentFamily.description}</HeaderTitle>}
      <MaterialGrid>
        {materialList &&
          materialList.map((mat, key) => (
            <GridCard
              image={mat.image_url.length > 0 ? mat.image_url : placeholderImg}
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
