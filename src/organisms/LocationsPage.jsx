import React from "react";
import styled from "styled-components";
import ZipSearchBar from "../molecules/ZipSearchBar";

import walkingImage from "../images/walking_graphic.svg";
import LocationCard from "../molecules/LocationCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Blurb = styled.h2`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  text-align: center;
  margin: 0;
  margin-top: 10px;
  pading: 0;
`;

const Img = styled.img`
  margin-top: 100px;
`;

const LocationsPage = () => {
  return (
    <Container>
      <Blurb>Where can I bring this?</Blurb>
      <ZipSearchBar />

      <Img src={walkingImage} />
      <LocationCard
        title="Something Recycling Center"
        address="567 Yolo Ave El Cerrito CA 94568"
        hours="M-F 8am - 5pm"
        phone="510-879-5678"
      />
    </Container>
  );
};

export default LocationsPage;
