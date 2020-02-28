import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import data from "../SubCategoryData";
import { useLazyQuery } from "@apollo/react-hooks";
import Spinner from "../atoms/Spinner";
import placeholderImg from "../images/category_placeholder.png";
import GridCard from "../molecules/GridCard";
import gql from "graphql-tag";

const Container = styled.div`
  display: grid;
  margin-top: 36px;
  width: 100%;
  gap: 26px 25px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  margin-bottom: 100px;
`;

export const GET_MATERIALS = gql`
  query getMaterialList($idList: [Int]) {
    getMaterialByIDS(idList: $idList) {
      material_id
      description
    }
  }
`;

const SubCategoryPage = () => {
  const { subCategoryId } = useParams();
  const [currentData, setCurrentData] = useState(null);
  const [getMaterials, materialInfo] = useLazyQuery(GET_MATERIALS);
  useEffect(() => {
    const foundData = data.find(dataObj => dataObj.id == subCategoryId);
    setCurrentData(foundData);
    console.log("Set current data", foundData);
  }, [subCategoryId]);

  useEffect(() => {
    console.log("Current Data: ", currentData);
    if (currentData)
      getMaterials({
        variables: {
          idList: currentData.materialIds
        }
      });
  }, [currentData]);

  if (materialInfo.loading) return <Spinner />;

  console.log(materialInfo);

  return (
    <Container>
      <GridCard image={placeholderImg} name={"test"} />
    </Container>
  );
};

export default SubCategoryPage;
