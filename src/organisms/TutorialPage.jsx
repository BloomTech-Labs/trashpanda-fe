import React from "react";
import Stepper from "../molecules/Stepper";
import styled from "styled-components";

const Container = styled.div``;

const TutorialPage = () => {
  return (
    <Container>
      <Stepper amount={3} currentStep={1} />
    </Container>
  );
};

export default TutorialPage;
