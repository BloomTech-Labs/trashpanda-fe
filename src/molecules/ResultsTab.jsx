import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import handle from "../images/results_button.svg";

import { useHistory } from "react-router-dom";

let boxHeight = "110px";

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
  justify-content: top;
  align-items: center;
  border-radius: 15px 15px 0px 0px;
  transition: height 2s;
`;
//  &:hover {
//     height: 500px;
//   }

const ResultHandleImg = styled.img`
  margin: 10px;
`;

const ResultsTab = () => {
  const [result, setResult] = useState("");
  const history = useHistory();

  const handleSearchReturn = () => {
    history.push(`/`);
  };

  const changeHeight = () => {
    if (boxHeight === "110px") {
      boxHeight = "200px";
      return boxHeight;
    } else if (boxHeight === "200px") {
      boxHeight = "110px";
      return boxHeight;
    }
  };

  return (
    <Container>
      {result === "" ? (
        <ResultsBox style={{ height: boxHeight }}>
          <ResultHandleImg src={handle} onClick={changeHeight} />
          {boxHeight === "110px" ? null : <p>No results found</p>}
          {boxHeight === "110px" ? null : <Button>Search</Button>}
        </ResultsBox>
      ) : (
        <ResultsBox style={{ height: boxHeight }}>
          <ResultHandleImg src={handle} onClick={changeHeight} />
          {boxHeight === "110px" ? null : <p>Is this an</p>}
          {boxHeight === "110px" ? null : { result }}
        </ResultsBox>
      )}
    </Container>
  );
};

export default ResultsTab;
