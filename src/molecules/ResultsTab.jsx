import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../atoms/Button";

import { useHistory } from "react-router-dom";

let boxHeight = "250px";

const Container = styled.div`
    max-width= 575px;
    width: 100%;
    position:absolute;
    bottom: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

`;

const ResultsBox = styled.div`
  width: 98vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px 15px 0px 0px;
  transition: height 2s;
`;
//  &:hover {
//     height: 500px;
//   }
const ResultsTab = () => {
  const [result, setResult] = useState("");
  const history = useHistory();

  const handleSearchReturn = () => {
    history.push(`/`);
  };

  const changeHeight = () => {
    console.log("boxheight1", boxHeight);
    if (boxHeight === "250px") {
      boxHeight = "500px";
      console.log("boxheight2", boxHeight);
      return boxHeight;
    } else if (boxHeight === "500px") {
      boxHeight = "250px";
      console.log("boxheight3", boxHeight);
      return boxHeight;
    }
  };

  return (
    <Container>
      {result === "" ? (
        <ResultsBox style={{ height: boxHeight }}>
          <p onClick={changeHeight}>Click me</p>

          <p>No results found</p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <Button>Search</Button>
        </ResultsBox>
      ) : (
        <ResultsBox style={{ height: boxHeight }}>
          <p onClick={changeHeight}>Click me</p>
          <p>Is this an</p>
          {result}
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </ResultsBox>
      )}
    </Container>
  );
};

export default ResultsTab;

//putting the following under the onClick tag will make it automatically move up and down
//  {boxHeight === "500px"
// ? (boxHeight = "250px")
// : (boxHeight = "500px")}
