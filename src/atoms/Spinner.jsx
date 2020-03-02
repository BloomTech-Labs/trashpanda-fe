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
`;

const SpinnerContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = ({ theme }) => {
  return (
    <SpinnerContainer>
      <SpinnerImage
        src={theme ? theme.loadingImg : spinnerImg}
        alt="loading spinner"
      />
    </SpinnerContainer>
  );
};

export default withTheme(Spinner);
