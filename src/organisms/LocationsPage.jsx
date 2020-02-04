import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ZipSearchBar from "../molecules/ZipSearchBar";

import { useParams } from "react-router-dom";

import walkingImage from "../images/walking_graphic.svg";
import LocationCard from "../molecules/LocationCard";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_LOCATIONS = gql`
  query getLocations($material_id: Int, $latitude: Float!, $longitude: Float!) {
    locations(
      latitude: $latitude
      longitude: $longitude
      material_id: $material_id
    ) {
      curbside
      municipal
      description
      longitude
      latitude
      address
      city
      province
      country
      postal_code
      region
      full_address
      national
      location_type_id
      event_only
      fax
      hours
      phone
      notes_public
      url
    }
  }
`;

const GET_POSTAL = gql`
  query getPostal($postal_code: String!) {
    postal_code(postal_code: $postal_code, country: "US") {
      postal_code
      longitude
      latitude
    }
  }
`;
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
  const { materialId } = useParams();
  const [zip, setZip] = useState("");
  const [locations, setLocations] = useState([]);
  const [getLocations, locationInfo] = useLazyQuery(GET_LOCATIONS);
  const [getPostal, postalInfo] = useLazyQuery(GET_POSTAL);

  useEffect(() => {
    if (postalInfo.called && postalInfo.data && !postalInfo.loading) {
      const { longitude, latitude } = postalInfo.data.postal_code;
      getLocations({
        variables: {
          latitude,
          longitude,
          material_id: parseInt(materialId)
        }
      });
    }
  }, [postalInfo.data]);

  useEffect(() => {
    if (locationInfo.called && locationInfo.data && !locationInfo.loading) {
      console.log(locationInfo.data);
      setLocations(locationInfo.data.locations);
    }
  }, [locationInfo.data]);

  const handleZipChange = e => {
    setZip(e.target.value);
  };

  const handleClick = () => {
    getPostal({
      variables: {
        postal_code: zip
      }
    });
  };

  return (
    <Container>
      <Blurb>Where can I bring this?</Blurb>
      <ZipSearchBar
        onClick={handleClick}
        value={zip}
        onChange={handleZipChange}
      />
      {locations.length > 0 ? (
        locations.map((loc, key) => (
          <LocationCard
            title={loc.description}
            address={loc.full_address}
            hours={loc.hours}
            phone={loc.phone}
            key={key}
          />
        ))
      ) : (
        <Img src={walkingImage} />
      )}
    </Container>
  );
};

export default LocationsPage;
