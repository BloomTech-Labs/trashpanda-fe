
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import handle from "../images/results_button.svg";
import chevron_lite from "../images/chevrons_up_lite.svg";
import chevron_dark from "../images/chevrons_up_dark.svg";

import { useHistory } from "react-router-dom";

let boxHeight = "110px";

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

const ResultDefault = styled.b`
  color: ${({ theme }) => theme.text};
  margin-top: 3vh;
`;

const ResultName = styled.b`
  color: ${({ theme }) => theme.text};
  font-size: 5vh;
  margin-top: 2vh;
`;

const CheckBoxHeight = props => {
  if (boxHeight !== "110px") {
    return <>{props.children}</>;
  } else {
    return <></>;
  }
};

const ResultsTab = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [clicks, setClicks] = useState([]);
  const history = useHistory();
  const theme = localStorage.getItem("theme");

  const handleSearchReturn = () => {
    history.push(`/`);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setClicks([1]);
    }, 500);
    return () => clearTimeout(timer);
  });

  const changeHeight = () => {
    if (boxHeight === "110px") {
      boxHeight = "500px";
      return boxHeight;
    } else if (boxHeight === "500px") {
      boxHeight = "110px";
      return boxHeight;
    }
  };

  // if (result.loading) {
  if (loading) {
    return (
      <Container>
        <ResultsBox>
          <ResultHandleImg src={handle} onClick={changeHeight} />
          <ResultDefault>Loading results...</ResultDefault>
        </ResultsBox>
      </Container>
    );
  } else {
    // if (result.data.materials.length === 0) {
    if (result) {
      return (
        <Container>
          <ResultsBox style={{ height: boxHeight }}>
            <ResultHandleImg src={handle} onClick={changeHeight} />
            <CheckBoxHeight>
              <ResultDefault>Is this an</ResultDefault>
              <ResultName>{result}</ResultName>
              <ChevronsImg
                src={theme === "light" ? chevron_lite : chevron_dark}
              />
            </CheckBoxHeight>
          </ResultsBox>
        </Container>
      );
    } else {
      return (
        <Container>
          <ResultsBox style={{ height: boxHeight }}>
            <ResultHandleImg src={handle} onClick={changeHeight} />
            <CheckBoxHeight>
              <ResultDefault>No results found</ResultDefault>
              <Button style={{ marginTop: "6vh" }} onClick={handleSearchReturn}>
                Search
              </Button>
            </CheckBoxHeight>
          </ResultsBox>
        </Container>
      );
    }
  }
};
export default ResultsTab;

// Maybe a good candidate for replacing what's above. Is only pseudocode,
// need to actually substitute real data

// const ResultBoxText = ({ result }) => {
//   switch (result) {
//     case "loading":
//       return <p>Loading results...</p>;
//     case "none":
//       return <p>No results found</p>;
//     case "found":
//       return <p>Is this an</p>;
//     default:
//       return <p>Error, please supply a result</p>;
//   }
// };

// const ResultBox = ({ resultState }) => {
//     const [getResults, results] = useMutation()
//     const [loadingState, setLoadingState] = useState();

//     useEffect(() => {
//         getResults();
//         if (results.loading) {
//             setLoadingState("loading")
//         } else {
//             if (results.data.materials.length > 0) {
//             setLoadingState("found");
//         } else {
//             setLoadingState("none");
//         }}
//     }, [getResults])

//   return (
//     <>
//       <ResultHandleImg />
//       <ResultBoxText result={loadingState} />
//       {result && loadingState === "found" && (
//         <>
//           <ResultName>{result}</ResultName>
//           <ChevronsImg
//             src={theme === "light" ? chevron_lite : chevron_dark}
//           />{" "}
//         </>
//       ) }
//       {result && loadingState === "none" && (
//         <Button style={{ marginTop: "6vh" }} onClick={handleSearchReturn}>
//           Search
//         </Button>
//       )}
//     </>
//   );
// };
