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

//////////////////SECONDARY\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// {
//   !loading ? (
//     result === "" ? (
//       boxHeight === "110px" ? (
//         <ResultsBox style={{ height: boxHeight }}>
//           <ResultHandleImg src={handle} onClick={changeHeight} />
//         </ResultsBox>
//       ) : (
//         <ResultsBox style={{ height: boxHeight }}>
//           <ResultHandleImg src={handle} onClick={changeHeight} />
//           <ResultDefault>No results found</ResultDefault>
//           <Button style={{ marginTop: "6vh" }} onClick={handleSearchReturn}>
//             Search
//           </Button>
//         </ResultsBox>
//       )
//     ) : boxHeight === "110px" ? (
//       <ResultsBox style={{ height: boxHeight }}>
//         <ResultHandleImg src={handle} onClick={changeHeight} />
//       </ResultsBox>
//     ) : (
//       <ResultsBox style={{ height: boxHeight }}>
//         <ResultHandleImg src={handle} onClick={changeHeight} />
//         <ResultDefault>Is this an</ResultDefault>
//         <ResultName>{result}</ResultName>}
//         <ChevronsImg src={theme === "light" ? chevron_lite : chevron_dark} />
//       </ResultsBox>
//     )
//   ) : null
// }

///////////////////////////PRIMARY\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// {!loading ? (
//     result === "" ? (
//       <ResultsBox style={{ height: boxHeight }}>
//         <ResultHandleImg src={handle} onClick={changeHeight} />
//         {boxHeight === "110px" ? null : (
//           <ResultDefault>No results found</ResultDefault>
//         )}
//         {boxHeight === "110px" ? null : (
//           <Button style={{ marginTop: "6vh" }} onClick={handleSearchReturn}>
//             Search
//           </Button>
//         )}
//       </ResultsBox>
//     ) : (
//       <ResultsBox style={{ height: boxHeight }}>
//         <ResultHandleImg src={handle} onClick={changeHeight} />
//         {boxHeight === "110px" ? null : (
//           <ResultDefault>Is this an</ResultDefault>
//         )}
//         {boxHeight === "110px" ? null : <ResultName>{result}</ResultName>}
//         {boxHeight === "110px" ? null : (
//           <ChevronsImg
//             src={theme === "light" ? chevron_lite : chevron_dark}
//           />
//         )}
//       </ResultsBox>
//     )
//   ) : null}
