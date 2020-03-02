import React from "react";

import styled from "styled-components";

const Sphere = styled.div`
  ${props =>
    props.selected
      ? `background: #336b68`
      : `background: ${props.theme.stepperColor}`};
  width: 10px;
  height: 10px;
  border-radius: 5px;

  margin-right: ${props => props.marginRight}px;
`;

const StepCircle = ({ selected }) => {
  return <Sphere selected={selected}></Sphere>;
};

export default StepCircle;
