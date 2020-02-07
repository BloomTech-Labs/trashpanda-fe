import React from "react";
import styled from "styled-components";
import introImg from "../images/man_trash.svg";
import raccoonImg from "../images/raccoon.svg";
import Button from "../atoms/Button";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  margin: 35px 19px 50px 19px;
`;

const Title = styled.h2`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;

  color: #404040;
  margin: 0;
`;
const FlexContainer = styled.div`
  display: flex;
`;

const IconImage = styled.img`
  height: 60.46px;
  float: right;
`;

function getPText(marginTop) {
  return styled.p`
    font-family: Muli;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    margin: 0;
    margin-top: ${marginTop}px;
    color: #404040;
  `;
}

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IntroImage = styled.img`
  margin-top: 80px;
`;

const PText = getPText(8);
const SubTitle = getPText(2);

const BtnContainer = styled.div`
  margin-top: 86px;
  margin-bottom: 40px;
`;

const LandingPage = () => {
  const history = useHistory();
  return (
    <Container>
      <div>
        <FlexContainer>
          <div>
            <Title>Trash Panda</Title>
            <SubTitle>
              is here to help you create and maintain better recycling habits.
            </SubTitle>
          </div>
          <IconImage src={raccoonImg} />
        </FlexContainer>
        <PText>
          Using information you give us, we’ll help you identify what the item
          is, if it’s recyclable, and where you can recycle it in your
          neighborhood.
        </PText>
      </div>
      <CenteredContainer>
        <IntroImage src={introImg} />
        <BtnContainer>
          <Button onClick={() => history.push("/intro/permission")}>
            Get Started
          </Button>
        </BtnContainer>
      </CenteredContainer>
    </Container>
  );
};

export default LandingPage;
