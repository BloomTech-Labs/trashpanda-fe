import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

import Sun from "../images/lightmode.svg";
import Moon from "../images/darkmode.svg";

const Img = styled.img`
  height: 25px;
  width: 25px;
`;

// const ToggleContainer = styled.div`
//   width: 0px;
//   height: 0px;
//   margin-left: 5%;
// `;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    // <ToggleContainer>
    <>
      {theme === "light" ? (
        <Img src={Moon} alt="Moon" onClick={toggleTheme} />
      ) : (
        <Img src={Sun} alt="Sun" onClick={toggleTheme} />
      )}
    </>
    // </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
};

export default Toggle;
