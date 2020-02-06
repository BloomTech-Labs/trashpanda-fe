import React from "react";

import styled from "styled-components";

const Container = styled.button`
  background: #336b68;

  border: 0.5px solid #336b68;
  box-sizing: border-box;
  border-radius: 50px;
  color: #ffffff;
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;

  height: 40px;
  width: 126px;
  outline: none;
`;

const Button = props => {
  return <Container {...props}>{props.children}</Container>;
};

export default Button;
