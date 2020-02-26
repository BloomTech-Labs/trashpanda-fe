import React from "react";
import styled, { keyframes, withTheme } from "styled-components";
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
  animation: ${rotate} 1.4s linear infinite;
  
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -50px;
  margin-top: -50px; 


`;

const Spinner = ({ theme }) => {
  return <SpinnerImage src={theme ? theme.loadingImg : spinnerImg} alt="loading spinner" />;
};

export default withTheme(Spinner);
