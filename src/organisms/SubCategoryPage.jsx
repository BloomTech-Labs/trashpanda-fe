import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import data from "../SubCategoryData";
import { useLazyQuery } from "@apollo/react-hooks";
import Spinner from "../atoms/Spinner";
import GridCard from "../molecules/GridCard";
import gql from "graphql-tag";
import { useHistory } from "react-router-dom";

//Plastic type images
import Plastic from "../atoms/Plastic";

const Root = styled.div`
  padding-top: 20px;
`;

const Container = styled.div`
  display: grid;
  margin-top: 36px;
  width: 100%;
  gap: 26px 25px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  margin-bottom: 100px;
`;

const Title = styled.h2`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  margin: 0;
  color: ${({ theme }) => theme.titleText};
`;

const Blurb = styled.p`
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  margin: 65px 16px;

  text-align: center;

  color: ${({ theme }) => theme.titleText};
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
  const history = useHistory();
  const [materialList, setMaterialList] = useState([]);
  const [getMaterials, materialInfo] = useLazyQuery(GET_MATERIALS);
  useEffect(() => {
    const foundData = data.find(dataObj => dataObj.id == subCategoryId);
    setCurrentData(foundData);
  }, [subCategoryId]);

  useEffect(() => {
    if (currentData)
      getMaterials({
        variables: {
          idList: currentData.materialIds
        }
      });
  }, [currentData]);

  useEffect(() => {
    if (materialInfo.data && materialInfo.data.getMaterialByIDS) {
      setMaterialList(materialInfo.data.getMaterialByIDS);
    }
  }, [materialInfo.data]);

  if (materialInfo.loading) return <Spinner />;

  return (
    <Root>
      <Title>{currentData && currentData.title}</Title>
      <Blurb>
        You can find which type of plastic your item is by looking for the
        numbered stamp, usually located near the bottom.
      </Blurb>
      <Container>
        {materialList &&
          materialList.map((material, key) => (
            <GridCard
              svg={getPlasticTypeImage(material.description)}
              name={getPlasticName(material.description)}
              key={key}
              onClick={() => history.push(`/material/${material.material_id}`)}
            />
          ))}
      </Container>
    </Root>
  );
};

function getPlasticName(materialName) {
  if (materialName === "#6 Plastic Cups - Expanded") return "PS - Styrofoam";

  const type = getPlasticNumberFromName(materialName);
  switch (type) {
    case 1:
      return "PET";
    case 2:
      return "HDPE";
    case 3:
      return "V";
    case 4:
      return "LDPE";
    case 5:
      return "PP";
    case 6:
      return "PS";
    case 7:
      return "Other";
  }
}

function getPlasticNumberFromName(name) {
  if (name.includes("#1")) return 1;
  if (name.includes("#2")) return 2;
  if (name.includes("#3")) return 3;
  if (name.includes("#4")) return 4;
  if (name.includes("#5")) return 5;
  if (name.includes("#6")) return 6;
  if (name.includes("#7")) return 7;

  return 7;
}

function getPlasticTypeImage(name) {
  const typeNumber = getPlasticNumberFromName(name);
  return <Plastic number={typeNumber} />;
}

export default SubCategoryPage;
