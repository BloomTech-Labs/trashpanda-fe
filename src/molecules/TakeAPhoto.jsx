import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const PhotoContainer = styled.div`
  background-color: ${({ theme }) =>
    theme.name === "Light" ? "rgb(51, 107, 104, 0.05)" : "#242424"};
  color: ${({ theme }) => (theme.name === "Light" ? "#404040" : "#FFFFFF")};
  width: 100%;
  padding-top: 79px;
  padding-bottom: 34px;
  display: flex;
  justify-content: center;
`;

const PhotoButton = styled.button`
  display: flex;
  flex-flow: row nowrap;
  //   justify-content: space-evenly;
  align-items: center;
  border: ${({ theme }) =>
    theme.name === "Light" ? "1.5px dashed #404040" : "1.5px dashed #D9D9D9"};
  border-radius: 5px;
  background-color: transparent;
  margin: 0 16px;
  padding: 0;
  color: inherit;
`;

const PhotoText = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  font-family: Muli;
  margin-right: 45px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  margin-bottom: 7px;
  margin-top: 14px;
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 13px;
  font-weight: 400;
`;

const CameraIcon = styled.svg`
  margin: 0 26px;
  min-width: 46px;
`;

const TakeAPhoto = ({ theme }) => {
  const history = useHistory();

  return (
    <PhotoContainer>
      <PhotoButton onClick={() => history.push("/camera")}>
        <CameraIcon
          viewBox="0 0 46 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M45.2075 34.4148C45.2075 35.5226 44.7841 36.585 44.0304 37.3683C43.2767 38.1516 42.2545 38.5917 41.1886 38.5917H5.01886C3.953 38.5917 2.93078 38.1516 2.1771 37.3683C1.42341 36.585 1 35.5226 1 34.4148V11.4421C1 10.3344 1.42341 9.27197 2.1771 8.48865C2.93078 7.70534 3.953 7.26528 5.01886 7.26528H10.3236C12.0267 7.26528 13.6127 6.3984 14.5322 4.96488L15.5999 3.30041C16.5194 1.86689 18.1054 1 19.8084 1H26.3991C28.1021 1 29.6881 1.86689 30.6076 3.3004L31.6753 4.96488C32.5948 6.39839 34.1808 7.26528 35.8839 7.26528H41.1886C42.2545 7.26528 43.2767 7.70534 44.0304 8.48865C44.7841 9.27197 45.2075 10.3344 45.2075 11.4421V34.4148Z"
            fill="white"
            stroke="#404040"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.1035 30.2348C27.5427 30.2348 31.1413 26.4947 31.1413 21.8811C31.1413 17.2674 27.5427 13.5273 23.1035 13.5273C18.6644 13.5273 15.0658 17.2674 15.0658 21.8811C15.0658 26.4947 18.6644 30.2348 23.1035 30.2348Z"
            fill="white"
            stroke="#404040"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </CameraIcon>
        <PhotoText>
          <Title>Take a photo</Title>
          <Description>
            Snap a photo of the item you want to recycle.
          </Description>
        </PhotoText>
      </PhotoButton>
    </PhotoContainer>
  );
};

export default TakeAPhoto;
