import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

// import Sun from "../images/lightmode.svg";
// import Moon from "../images/darkmode.svg";

const ToggleContainer = styled.button`
  width: 10px;
  height: 10px;
`;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <ToggleContainer onClick={toggleTheme}>
      {/* <Sun />
      <Moon /> */}
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
};

export default Toggle;
