import React from "react";
import styled, { keyframes } from "styled-components";
import spinnerImg from "../images/loading.svg";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    
    to {
        transform: rotate(360deg);
    }
`;

const SpinnerImage = styled.img`
  height: 193px;
  width: 200px;
  animation: ${rotate} 1.4s linear infinite;
  margin: 0 auto;
  margin-top: 134px;
`;

const Spinner = () => {
  return <SpinnerImage src={spinnerImg} alt="loading spinner" />;
};

export default Spinner;
