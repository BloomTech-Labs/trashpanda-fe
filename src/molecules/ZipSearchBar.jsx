import React from "react";
import styled from "styled-components";
import searchImage from "../images/lens.svg";

const Container = styled.div`
  display: flex;
  align-items: center;

  margin: 31px 16px;
  margin-bottom: 40px;
  height: 40px;
  border: 0.5px solid #336b68;
  border-radius: 50px;
`;

const Input = styled.input`
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;

  border: none;
  outline: none;
  color: #847d7d;
  line-height: 25px;
  width: 100%;
  margin-right: 10px;
`;

const Img = styled.img`
  height: 24px;
  margin: 0;
  margin: 6px 16px 6px 16px;
`;

const Button = styled.button`
  height: 100%;
  background: #336b68;
  border-radius: 0px 50px 50px 0px;

  font-family: Muli;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;

  outline: none;
  border: none;

  padding: 0px 38px;
  cursor: pointer;
`;

const ZipSearchBar = props => {
  return (
    <Container>
      <Img src={searchImage} />
      <Input {...props} placeholder="enter zip code" />
      <Button onClick={props.onClick}>GO</Button>
    </Container>
  );
};

export default ZipSearchBar;
