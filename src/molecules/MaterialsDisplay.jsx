import React from "react";
import styled from "styled-components";
import landfillImg from "../images/landfill_filled.svg";
import recycleImg from "../images/recycle_filled.svg";
import compostImg from "../images/compost.svg";

import Image from "../atoms/Image";

const Container = styled.div`
  display: flex;
  margin: 50px 40px;

  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  color: #000000;
  margin: 0px;
  padding: 0px;
`;

const Card = styled.div``;

const MaterialsDisplay = ({ recycle, landfill, compost }) => {
  return (
    <Container>
      <Card>
        <Image src={recycleImg} opacity={recycle ? "1.0" : "0.2"} />
        <Title>Recycle</Title>
      </Card>
      <Card>
        <Image src={landfillImg} opacity={landfill ? "1.0" : "0.2"} />
        <Title>Landfill</Title>
      </Card>
      <Card>
        <Image src={compostImg} opacity={compost ? "1.0" : "0.2"} />
        <Title>Compost</Title>
      </Card>
    </Container>
  );
};

export default MaterialsDisplay;
