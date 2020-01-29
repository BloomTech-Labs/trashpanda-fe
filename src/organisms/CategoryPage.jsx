import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import bgImg from "../images/batteries.jpg";

const Root = styled.div``;

const CategoryPage = () => {
  //Setup for future requests from backend.
  const { id } = useParams();

  //Getting image url from backend.
  //Temporary image imported.
  const Header = styled.div`
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 214px;
    position: relative;
  `;

  const HeaderTitle = styled.h2`
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    font-weight: bold;
    color: #404040;
    font-size: 36px;
  `;

  return (
    <Root>
      <Header>
        <HeaderTitle>Batteries</HeaderTitle>
      </Header>
    </Root>
  );
};

export default CategoryPage;
