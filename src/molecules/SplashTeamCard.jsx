import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${props => props.width};
  margin: ${props => props.margin};
`;

const Image = styled.img`
  border-radius: 100px;
  width: 100px;
  height: 100px;
  margin-bottom: 11px;
`;

const Name = styled.h3`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  margin: 0;
  color: #404040;
`;

const Title = styled.p`
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  margin: 0;
  color: #404040;
`;

const SplashTeamCard = ({ image, name, title, width, margin }) => {
  return (
    <Container width={width} margin={margin}>
      <Image src={image} />
      <Name>{name}</Name>
      <Title>{title}</Title>
    </Container>
  );
};

export default SplashTeamCard;
