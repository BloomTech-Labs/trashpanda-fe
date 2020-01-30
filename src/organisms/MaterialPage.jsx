import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import GridCard from "../molecules/GridCard";
import placeholderImg from "../images/category_placeholder.svg";
import MaterialsDisplay from "../molecules/MaterialsDisplay";

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

const LongDescription = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  margin: 0px 28px;
  color: #000000;
`;

const Button = styled.button`
  height: 39px;
  background: #525252;
  width: 90%;
  border-radius: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  text-transform: uppercase;

  margin-top: 70px;
  margin-bottom: 60px;
  margin-right: 15px;
  margin-left: 15px;
`;

const ButtonContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CardContainer = styled.div`
  margin-top: 50px;
`;

const MaterialPage = () => {
  const { id, materialId } = useParams();
  return (
    <Container>
      <CardContainer>
        <GridCard bold name="Lithium" image={placeholderImg} />
      </CardContainer>
      <MaterialsDisplay compost landfill recycle />
      <LongDescription>
        Single-use batteries do not contain heavy metals, which limits their
        recycling market. You may have to pay for recycling
      </LongDescription>
      <ButtonContainer>
        <Button>How can i recycle this in my area?</Button>
      </ButtonContainer>
    </Container>
  );
};

export default MaterialPage;
