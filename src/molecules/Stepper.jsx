import React from "react";
import styled from "styled-components";
import StepCircle from "../atoms/StepCircle";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  div {
    margin-right: 10px;
  }
  div:last-child {
    margin-right: 0px;
  }
`;

function renderCircles(amount, currentStep) {
  let elemArray = [];
  for (let i = 1; i <= amount; i++)
    elemArray.push(<StepCircle selected={currentStep === i} key={i} />);

  return elemArray;
}

const Stepper = ({ currentStep, amount }) => {
  return <Container>{renderCircles(amount, currentStep)}</Container>;
};

export default Stepper;
