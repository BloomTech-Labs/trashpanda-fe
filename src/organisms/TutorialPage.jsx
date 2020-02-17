import React, { useState } from "react";
import Stepper from "../molecules/Stepper";
import styled from "styled-components";
import Button from "../atoms/Button";

import trashManImg from "../images/trash_man.svg";
import photoImg from "../images/photo_illustration.svg";
import locationImg from "../images/location_illustration.svg";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  font-size: 28px;
  color: #404040;

  margin-top: 20px;
  margin-bottom: 25px;
`;

const SubTitle = styled.h3`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  text-align: center;

  color: #404040;
  margin-top: 30px;
  margin-bottom: 11px;
  margin-left: 30px;
  margin-right: 30px;
`;

const Img = styled.img`
  margin-bottom: ${props => props.marginBottom}px;
`;

const PText = styled.p`
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;
  text-align: center;

  color: #404040;

  margin-left: 60px;
  margin-right: 60px;
  margin-top: 0px;
  margin-bottom: ${props => props.marginBottom}px;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function renderPage(step) {
  switch (step) {
    case 1:
      return (
        <CenterContainer>
          <Title>Trash Panda</Title>
          <PText marginBottom="60">
            Here to help you create better recycling habits.
          </PText>
          <Img marginBottom="38" src={trashManImg} />
        </CenterContainer>
      );
    case 2:
      return (
        <CenterContainer>
          <SubTitle>Certain areas have different regulations.</SubTitle>
          <PText>
            Let us use your location to help you properly dispose of the item.
          </PText>
          <Img marginBottom="38" src={locationImg} />
        </CenterContainer>
      );
    case 3:
      return (
        <CenterContainer>
          <SubTitle>Snap a photo of the item you want to recycle.</SubTitle>
          <PText marginBottom="49">
            We’ll tell you what it’s made of and how to properly dispose of it.
          </PText>
          <Img marginBottom="60" src={photoImg} />
        </CenterContainer>
      );
  }
}

const TutorialPage = ({ getLocation, handleLocation, getCamera }) => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    switch (step) {
      case 3:
        //Ask for camera permission
        getCamera();
        break;
      case 2:
        //Ask for location permission
        getLocation(
          handleLocation,
          () => {
            setStep(3);
          },
          err => {
            if (err.message === "User denied Geolocation") {
              setStep(3);
            } else {
              console.log("Unable to retrieve position, error: ", err);
              alert("Error: ", err.message);
              setStep(3);
            }
          }
        );
        break;
      default:
        setStep(step + 1);
    }
  };

  return (
    <Container>
      {renderPage(step)}
      <Stepper amount={3} currentStep={step} />
      <Button marginTop="75" marginBottom="70" onClick={handleNext}>
        Next
      </Button>
    </Container>
  );
};

export default TutorialPage;
