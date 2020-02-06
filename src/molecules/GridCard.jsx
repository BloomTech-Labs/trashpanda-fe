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

const CategoryGridCard = ({ image, name, onClick, bold }) => {
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
    color: #737373;
    ${bold
      ? `font-weight: bold;
      color: black;
      `
      : ""}
  `;

  return (
    <Container onClick={onClick}>
      <Img src={image} alt={`${name} category`} />
      <Name>{name}</Name>
    </Container>
  );
};

export default CategoryGridCard;
