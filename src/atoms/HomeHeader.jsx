import React from "react";
import styled from "styled-components";
import trashPandaImg from "../images/trashpanda.png";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2px;
`;

const Title = styled.h2`
  font-size: 20px;
  color: #000000;
  font-style: normal;
  font-weight: normal;
  margin: 0;
  padding: 0;
`;

const HomeHeader = () => {
  return (
    <Header>
      <img src={trashPandaImg} alt="logo" />
      <Title>Trash Panda</Title>
    </Header>
  );
};

export default HomeHeader;
