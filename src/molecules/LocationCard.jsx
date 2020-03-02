import React from "react";

import styled from "styled-components";

const Container = styled.div`
  padding: 8px 12px;
  border: 0.5px solid ${({ theme }) => theme.locationBorder};
  box-sizing: border-box;
  border-radius: 5px;
  background: ${({ theme }) => theme.searchBackground};

  margin-bottom: 30px;
  margin-left: 16px;
  margin-right: 16px;
`;

const Title = styled.h2`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: ${({ theme }) => theme.text};

  text-decoration-line: underline;
  margin: 0;
  padding: 0;
`;

const PText = styled.p`
  color: ${({ theme }) => theme.text};
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;

  margin: 0px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Address = styled.div`
  width: 98px;

  margin-top: 9px;
  margin-bottom: 8px;
`;

const Hours = styled.div`
  margin-bottom: 16px;
  margin-top: 8px;
`;

const InfoContainer = styled.div`
  // width: 50%;
  width: 155px;
`;
const LocationCard = ({ title, address, hours, phone }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <FlexContainer>
        <Address>
          <PText>{address}</PText>
        </Address>
        <InfoContainer>
          <Hours>
            <PText>Hours: {hours}</PText>
          </Hours>
          <PText>Phone: {phone}</PText>
        </InfoContainer>
      </FlexContainer>
    </Container>
  );
};

export default LocationCard;
