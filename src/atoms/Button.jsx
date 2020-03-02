import React from "react";

import styled from "styled-components";

const Container = styled.button`
  ${props => (props.inverted ? `background: #FFFFFF;` : `background: #336b68;`)}

  // border: 0.5px solid #336b68;
  border: none;
  box-sizing: border-box;
  border-radius: 5px;
  ${props => (props.inverted ? `color: #336B68;` : `color: #ffffff;`)}

  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;

  height: 40px;
  width: 126px;
  ${props => (props.width ? `width: 126px` : `width: ${props.width}px`)};
  outline: none;
  cursor: pointer;

  margin-top: ${props => props.marginTop}px;
  margin-bottom: ${props => props.marginBottom}px;
`;

const Button = props => {
  return (
    <Container inverted={props.inverted} {...props}>
      {props.children}
    </Container>
  );
};

export default Button;
