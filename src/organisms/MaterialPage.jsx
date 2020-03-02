import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Badge from "../molecules/Badge";
import Spinner from "../atoms/Spinner";

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
  margin-bottom: 120px;
  color: ${({ theme }) => theme.titleText};
`;

const SpecialText = styled.p`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  margin-left: 28px;
  margin-right: 28px;
  margin-bottom: 120px;
  color: ${({ theme }) => theme.titleText};
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  line-height: 30px;
  color: ${({ theme }) => theme.titleText};
  margin: 0;
  padding-top: 20px;
`;

const ButtonContainer = styled.div`
  font-family: Muli;

  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  border-radius: 5px;

  background: #336b68;
  margin-bottom: 48px;
  cursor: pointer;
`;

export const GET_MATERIAL = gql`
  query getMaterial($materialId: Int!) {
    material(id: $materialId) {
      material_id
      description
      long_description
      bin_trash
      bin_recycle
      bin_compost
      dropoff
      pickup
      notes
    }
  }
`;

function getTypeString(recycle, compost, landfill) {
  if (recycle) return "recycle";
  if (compost) return "compost";
  if (landfill) return "landfill";
  return "offsite";
}

const MaterialPage = () => {
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
    pickup: null,
    notes: null
  });

  useEffect(() => {
    if (matInfo.data && !matInfo.loading) {
      setMaterial(matInfo.data.material);
    }
  }, [matInfo.data]);

  if (matInfo.loading)
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );

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

      <SpecialText>{material.notes}</SpecialText>
    </Container>
  );
};

export default MaterialPage;
