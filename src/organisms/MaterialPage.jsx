import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Badge from "../molecules/Badge";

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

const LongDescription = styled.p`
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  margin: 0px 28px;
  color: #000000;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  line-height: 30px;
`;

const ButtonContainer = styled.div`
  font-family: Muli;

  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const GET_MATERIAL = gql`
  query getMaterial($materialId: Int!) {
    material(id: $materialId) {
      description
      long_description
      bin_trash
      bin_recycle
      bin_compost
      dropoff
      pickup
    }
  }
`;

const LocationButton = styled.button`
  outline: none;
  border: none;
  font-family: Muli;

  font-size: 18px;
  color: #ffffff;
  // font-weight: 600;
  padding: 9px 14px;
  width: 156px;

  border: 0.5px solid #336b68;
  box-sizing: border-box;
  border-radius: 100px;

  background: #336b68;
  margin-bottom: 48px;
  cursor: pointer;
`;

function getTypeString(recycle, compost, landfill) {
  if (recycle) return "recycle";
  if (compost) return "compost";
  if (landfill) return "landfill";
  return "offsite";
}

const MaterialPage = ({ materials }) => {
  const history = useHistory();
  const { materialId } = useParams();

  const matInfo = useQuery(GET_MATERIAL, {
    variables: {
      materialId: parseInt(materialId)
    }
  });
  const [material, setMaterial] = useState({
    description: "",
    long_description: "",
    bin_trash: false,
    bin_recycle: false,
    bin_compost: false,
    dropoff: null,
    pickup: null
  });

  useEffect(() => {
    if (matInfo.data && !matInfo.loading) {
      setMaterial(matInfo.data.material);
    }
  }, [matInfo.data]);

  return (
    <Container>
      <Title>{material.description}</Title>
      <Badge
        type={getTypeString(
          material.bin_recycle,
          material.bin_compost,
          material.bin_trash
        )}
      />
      <ButtonContainer>
        <LocationButton
          onClick={() => history.push(`/material/${materialId}/locations`)}
        >
          Locate Centers
        </LocationButton>
      </ButtonContainer>
      <LongDescription>{material.long_description}</LongDescription>
    </Container>
  );
};

export default MaterialPage;
