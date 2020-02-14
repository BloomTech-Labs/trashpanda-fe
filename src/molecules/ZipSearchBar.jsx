import React from "react";
import styled from "styled-components";
import searchImage from "../images/lens.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.searchBackground};
  margin: 31px 16px;
  margin-bottom: 40px;
  height: 40px;
  border: 0.5px solid #404040;
  border-radius: 50px;
  box-sizing: border-box;
`;

const Input = styled.input`
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;

  border: none;
  outline: none;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.searchBackground};
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
  box-sizing: border-box;
  height: 99%;

  background: #336b68;
  border-radius: 0px 50px 50px 0px;
  margin-right: 0.1px;
  font-family: Muli;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;

  outline: none;
  border: none;

  // border-bottom: 0.5px solid #404040;
  // border-right: 0.5px solid #404040;

  padding: 0px 38px;
  cursor: pointer;

  &:disabled {
    background-color: #d9d9d9;
    cursor: auto;
  }
`;

const ZipSearchBar = props => {
  return (
    <Container>
      <Img src={searchImage} />
      <Input {...props} placeholder="enter zip code" />
      <Button disabled={props.btnDisabled} onClick={props.handleClick}>
        GO
      </Button>
    </Container>
  );
};

export default ZipSearchBar;
