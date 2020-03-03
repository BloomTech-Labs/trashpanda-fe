import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import GridCard from "../molecules/GridCard";
import placeholderImg from "../images/category_placeholder.png";

const Root = styled.div`
  padding-top: 20px;
`;

const HeaderTitle = styled.h2`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  text-align: center;

  color: ${({ theme }) => theme.titleText};

  margin: 0;
  margin-bottom: 39px;
  padding: 0;
`;

const MaterialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 26px 22px;
  margin: 39px 13px;
  margin-bottom: 105px;
`;

const ClusterPage = ({ appCluster }) => {
  const history = useHistory();

  const onClick = materialId => {
    history.push(`/material/${materialId}`);
  };

  return (
    <Root>
      {appCluster && <HeaderTitle>{appCluster.cluster_name}</HeaderTitle>}
      <MaterialGrid>
        {appCluster &&
          appCluster.materials.map((mat, key) => (
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

export default ClusterPage;
