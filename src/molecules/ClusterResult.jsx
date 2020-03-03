import React, { useState, useEffect } from "react";
import { Collapse } from "react-collapse";

import styled from "styled-components";
import Button from "../atoms/Button";
import chevron_lite from "../images/chevrons_up_lite.svg";
import chevron_dark from "../images/chevrons_up_dark.svg";

import { useHistory } from "react-router-dom";

const Container = styled.div`
    max-width= "800px";
    width: ${window.innerWidth > 800 ? "800px" : "100%"};
    position:absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px 5px 0px 0px;
    padding-bottom: 40px;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
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
  if (ClusterData.error) {
    return "none";
  }
  if (ClusterData.data && ClusterData.data.getCluster.materials.length > 0) {
    return "found";
  } else {
    return "none";
  }
};

const ClusterResult = ({
  ClusterData,
  setSearchFocus,
  shutterPress,
  setShutterPress
}) => {
  const history = useHistory();
  const [expanded, setExpanded] = useState(false);
  const theme = localStorage.getItem("theme");

  const loadingState = getLoadingState(ClusterData);

  const toggleExpanded = () => setExpanded(!expanded);

  const handleSearchReturn = async () => {
    await setSearchFocus(true);
    await setShutterPress(false);
    history.push(`/`);
  };

  useEffect(() => {
    toggleExpanded();
  }, [shutterPress]);

  const handleResultsClick = () => {
    console.log(ClusterData);
    if (
      !ClusterData.loading &&
      ClusterData.data &&
      ClusterData.data.getCluster.materials.length === 1
    ) {
      history.push(
        `/material/${ClusterData.data.getCluster.materials[0].material_id}`
      );
    } else {
      history.push("/camera/results");
    }
    setShutterPress(false);
  };

  return (
    <Container onClick={handleResultsClick}>
      <Collapse isOpened={expanded}>
        {expanded && (
          <Results>
            {loadingState === "found" && (
              <>
                <ResultName>
                  {ClusterData.data.getCluster.cluster_name}
                </ResultName>
              </>
            )}
            {loadingState === "none" && (
              <>
                <ResultBoxText>{resultText(loadingState)}</ResultBoxText>
                <Button
                  style={{ marginTop: "6vh", marginBottom: "6vh" }}
                  onClick={handleSearchReturn}
                >
                  Search
                </Button>
              </>
            )}
          </Results>
        )}
      </Collapse>
    </Container>
  );
};

export default ClusterResult;
