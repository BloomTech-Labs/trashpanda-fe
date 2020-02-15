import React from "react";
import styled from "styled-components";

import offsiteImg from "../images/offsite.svg";
import recycleImg from "../images/recycle.svg";
import landfillImg from "../images/landfill.svg";
import compostImg from "../images/compost.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BadgeTitle = styled.h3`
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  margin: 0;
  margin-top: 30px;
  margin-bottom: 40px;
  width: 135px;
`;

const BadgeImage = styled.img`
  margin-top: ${props => props.marginTop}px;
`;

function getBadgeTitle(type) {
  if (type === "recycle" || type === "landfill" || type === "compost")
    return type.charAt(0).toUpperCase() + type.substring(1); //Capitalize first letter

  return "Off-Site Recycle";
}

function getBadgeImage(type) {
  switch (type) {
    case "recycle":
      return <BadgeImage src={recycleImg} marginTop={85} />;
    case "offsite":
      return <BadgeImage src={offsiteImg} marginTop={40} />;
    case "landfill":
      return <BadgeImage src={landfillImg} marginTop={74} />;
    case "compost":
      return <BadgeImage src={compostImg} marginTop={62} />;
    default:
      return <BadgeImage src={offsiteImg} marginTop={40} />;
  }
}

const Badge = ({ type }) => {
  return (
    <Container>
      {getBadgeImage(type)}
      <BadgeTitle>{getBadgeTitle(type)}</BadgeTitle>
    </Container>
  );
};

export default Badge;
