import React from "react";
import styled from "styled-components";
import raccoonImg from "../images/trashpanda.svg";

const Container = styled.div`
  margin-top: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const PText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: black;
`;

const Logo = styled.img`
  height: 117px;
  min-height: 117px;
  margin
`;

const Title = styled.h1`
  font-size: 28px;
  line-height: 38px;
  margin: 0;
  padding: 0;
`;

const HomeIntro = () => {
  return (
    <Container>
      <FlexContainer>
        <div>
          <Title>Trash Panda</Title>
          <PText>We’re here to help you create better recycling habits.</PText>
        </div>
        <Logo src={raccoonImg} alt="logo" />
      </FlexContainer>
      <PText>
        Using information you give us, we’ll help you not only identify what the
        item is, but if it’s recylable and where you can recycle it in your
        neighborhood.
      </PText>
    </Container>
  );
};

export default HomeIntro;
