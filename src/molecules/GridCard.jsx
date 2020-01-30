import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Img = styled.img`
  border-radius: 50px;
`;

const Name = styled.p`
  font-size: 18px;
  margin: 0;
  margin-top: 9px;
  padding: 0;
  color: rgba(0, 0, 0, 0.6);
`;

const CategoryGridCard = ({ image, name, onClick, bold }) => {
  const Name = styled.p`
    font-size: 18px;
    margin: 0;
    margin-top: 9px;
    padding: 0;
    color: rgba(0, 0, 0, 0.6);
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
