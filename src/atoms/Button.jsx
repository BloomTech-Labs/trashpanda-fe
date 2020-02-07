import React from "react";

import styled from "styled-components";

function getButtonStyles(inverted) {
  return styled.button`
    ${inverted ? `background: #FFFFFF;` : `background: #336b68;`}

    border: 0.5px solid #336b68;
    box-sizing: border-box;
    border-radius: 50px;
    ${inverted ? `color: #336B68;` : `color: #ffffff;`}
    font-family: Muli;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;

    height: 40px;
    width: 126px;
    outline: none;
    cursor: pointer;
  `;
}

const Button = props => {
  const Container = getButtonStyles(props.inverted);
  return <Container {...props}>{props.children}</Container>;
};

export default Button;
