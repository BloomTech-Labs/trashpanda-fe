import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Img = styled.img`
  border-radius: 50px;
  width: 100px;
`;

const Name = styled.p`
  font-family: Muli;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  margin: 0;
  margin-top: 9px;
  padding: 0;
  color: ${({ theme }) => theme.text};

  ${props =>
    props.bold
      ? `font-weight: bold;
        color: black;
        `
      : ""}
`;

const CategoryGridCard = ({ image, name, onClick, bold, svg }) => {
  return (
    <Container onClick={onClick}>
      {svg ? svg : <Img src={image} alt={`${name} category`} />}

      <Name bold={bold}>{name}</Name>
    </Container>
  );
};

export default CategoryGridCard;
