import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import data from "../SubCategoryData";
import { useLazyQuery } from "@apollo/react-hooks";
import Spinner from "../atoms/Spinner";
import placeholderImg from "../images/category_placeholder.png";
import GridCard from "../molecules/GridCard";
import gql from "graphql-tag";
import { useHistory } from "react-router-dom";
import { withTheme } from "styled-components";

//Plastic type images
import Plastic from "../atoms/Plastic";
// import plastic2 from "../images/plastics/plastic2.png";
// import plastic3 from "../images/plastics/plastic3.png";
// import plastic4 from "../images/plastics/plastic4.png";
// import plastic5 from "../images/plastics/plastic5.png";
// import plastic6 from "../images/plastics/plastic6.png";
// import plastic7 from "../images/plastics/plastic7.png";
// import Plastic1 from "../atoms/Plastic1";

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

const SubCategoryPage = ({ theme }) => {
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
    <div>
      <Title>{currentData && currentData.title}</Title>
      <Container>
        {materialList &&
          materialList.map((material, key) => (
            <GridCard
              // image={
              //   theme.name === "Dark"
              //     ? convertToDarkMode(getPlasticTypeImage(material.description))
              //     : getPlasticTypeImage(material.description)
              // }
              svg={getPlasticTypeImage(material.description)}
              name={material.description}
              key={key}
              onClick={() => history.push(`/material/${material.material_id}`)}
            />
          ))}
      </Container>
    </div>
  );
};

function getPlasticTypeImage(name) {
  if (name.includes("#1")) return <Plastic number={1} />;
  if (name.includes("#2")) return <Plastic number={2} />;
  if (name.includes("#3")) return <Plastic number={3} />;
  if (name.includes("#4")) return <Plastic number={4} />;
  if (name.includes("#5")) return <Plastic number={5} />;
  if (name.includes("#6")) return <Plastic number={6} />;
  if (name.includes("#7")) return <Plastic number={7} />;

  return <Plastic />;
}

export default withTheme(SubCategoryPage);
