import React from "react";
import styled from "styled-components";

const Image = props => {
  if (!props.opacity) props.opacity = 1;

  const Img = styled.img`
    opacity: ${props.opacity};
    color: black;
  `;

  return <Img {...props} />;
};

export default Image;
