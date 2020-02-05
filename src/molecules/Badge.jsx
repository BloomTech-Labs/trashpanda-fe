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
  color: #404040;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  margin: 0;
  margin-top: 30px;
  margin-bottom: 40px;
  width: 135px;
`;

function getBadgeStyling(marginTop) {
  return styled.img`
    margin-top: ${marginTop}px;
  `;
}

function getBadgeTitle(type) {
  if (type === "recycle" || type === "landfill" || type === "compost")
    return type.charAt(0).toUpperCase() + type.substring(1); //Capitalize first letter

  return "Off-Site Recycle";
}

function getBadgeImage(type) {
  switch (type) {
    case "recycle":
      const RecycleBadge = getBadgeStyling(85);
      return <RecycleBadge src={recycleImg} />;
    case "offsite":
      const OffsiteBadge = getBadgeStyling(40);
      return <OffsiteBadge src={offsiteImg} />;
    case "landfill":
      const LandfillBadge = getBadgeStyling(74);
      return <LandfillBadge src={landfillImg} />;
    case "compost":
      const CompostBadge = getBadgeStyling(62);
      return <CompostBadge src={compostImg} />;
    default:
      return <OffsiteBadge src={offsiteImg} />;
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
