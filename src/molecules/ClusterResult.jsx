import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import resultBtnImage from "../images/results_button.svg";
import chevron_lite from "../images/chevrons_up_lite.svg";
import chevron_dark from "../images/chevrons_up_dark.svg";

import { useHistory } from "react-router-dom";

const Container = styled.div`
    max-width= "575px";
    width: ${window.innerWidth > 575 ? "567px" : window.innerWidth};
    position:absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ResultsBox = styled.div`
  max-width: 575px;
  width: 98vw;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  display: flex;
  height: ${({ expanded }) => (expanded ? "500px" : "140px")};
  flex-direction: column;
  justify-content: top;
  align-items: center;
  border-radius: 15px 15px 0px 0px;
  transition: height 2s;
`;

const ResultHandleImg = styled.img`
  margin: 10px;
`;

const ChevronsImg = styled.img`
  margin: 10px;
`;

const ResultBoxText = styled.b`
  color: ${({ theme }) => theme.text};
  margin-top: 3vh;
`;

const ResultName = styled.b`
  color: ${({ theme }) => theme.text};
  font-size: 5vh;
  margin-top: 2vh;
`;

const Results = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const resultText = loadingState => {
  switch (loadingState) {
    case "loading":
      return "Loading results...";
    case "none":
      return "No results found";
    case "found":
      return "Is this an";
    default:
      return "Error, please supply a result";
  }
};

const getLoadingState = ClusterData => {
  if (ClusterData.loading) {
    return "loading";
  }
  if (ClusterData.data && ClusterData.data.getCluster.materials.length > 0) {
    return "found";
  } else {
    return "none";
  }
};

const ClusterResult = ({ ClusterData, toggleSearchFocus }) => {
  const history = useHistory();
  const [expanded, setExpanded] = useState(false);
  const theme = useRef(() => localStorage.getItem("theme")).current;

  const loadingState = getLoadingState(ClusterData);

  const toggleExpanded = () => setExpanded(!expanded);

  const handleSearchReturn = async () => {
    await toggleSearchFocus(true);
    history.push(`/`);
  };

  useEffect(() => {
    if (!ClusterData.loading && ClusterData.data) {
      toggleExpanded();
    }
  }, [ClusterData]);

  return (
    <Container>
      <ResultsBox expanded={expanded}>
        <ResultHandleImg src={resultBtnImage} onClick={toggleExpanded} />
        {expanded && (
          <Results onClick={() => history.push("/camera/results")}>
            <ResultBoxText>{resultText(loadingState)}</ResultBoxText>
            {loadingState === "found" && (
              <>
                <ResultName>
                  {ClusterData.data.getCluster.cluster_name}
                </ResultName>
                <ChevronsImg
                  src={theme === "light" ? chevron_lite : chevron_dark}
                />
              </>
            )}
            {loadingState === "none" && (
              <Button style={{ marginTop: "6vh" }} onClick={handleSearchReturn}>
                Search
              </Button>
            )}
          </Results>
        )}
      </ResultsBox>
    </Container>
  );
};

export default ClusterResult;
