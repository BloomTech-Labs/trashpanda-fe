import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import GridCard from "../molecules/GridCard";
import placeholderImg from "../images/category_placeholder.svg";
import MaterialsDisplay from "../molecules/MaterialsDisplay";

const Container = styled.div``;

const LongDescription = styled.p`
  font-size: 18px;
  color: black;
`;

const Button = styled.button`
  height: 39px;
  background: #525252;
  border-radius: 20px;
  width: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  color: #ffffff;
`;

const ImagesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const MaterialPage = () => {
  const { id, materialId } = useParams();
  return (
    <Container>
      <GridCard name="Lithium" image={placeholderImg} />
      <MaterialsDisplay compost landfill recycle />
      <LongDescription>
        Single-use batteries do not contain heavy metals, which limits their
        recycling market. You may have to pay for recycling
      </LongDescription>
    </Container>
  );
};

export default MaterialPage;
