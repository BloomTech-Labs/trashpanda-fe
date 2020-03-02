import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import gql from "graphql-tag";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import styled from "styled-components";

import ZipSearchBar from "../molecules/ZipSearchBar";
import walkingImage from "../images/walking_graphic.svg";
import LocationCard from "../molecules/LocationCard";
import Spinner from "../atoms/Spinner";
import { withTheme } from "styled-components";

export const GET_LOCATIONS = gql`
  query getLocations($material_id: Int, $latitude: Float!, $longitude: Float!) {
    locations(
      latitude: $latitude
      longitude: $longitude
      material_id: $material_id
    ) {
      description
      address
      full_address
      hours
      phone
      url
    }
  }
`;

export const GET_POSTAL = gql`
  query getPostal($postal_code: String!) {
    postal_code(postal_code: $postal_code, country: "US") {
      postal_code
      longitude
      latitude
    }
  }
`;

export const GET_ZIP = gql`
  query getZip($latitude: String!, $longitude: String!) {
    getZip(latitude: $latitude, longitude: $longitude) {
      postal_code
    }
  }
`;

export const GET_GPS = gql`
  query coordinates {
    GPS {
      latitude
      longitude
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Blurb = styled.h2`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  text-align: center;
  margin: 0;
  margin-top: 10vh;
  pading: 0;
  color: ${({ theme }) => theme.text};
`;
const CardsContainer = styled.div`
  margin: 0;
  margin-bottom: 70px;
`;

const Img = styled.img`
  // margin-top: 108px;
  margin-bottom: 150px;
  margin-top: ${props => props.marginBottom}px;
`;

const NoResults = styled.h3`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  margin: 0;
  color: ${({ theme }) => theme.resultsText};
`;

const NoResultsP = styled.p`
  font-family: Muli;
  font-style: normal;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  margin: 0;
  margin-bottom: 51px;
  color: ${({ theme }) => theme.resultsText};
`;

function validateZip(zip) {
  return /^\d{5}$/.test(zip);
}

function renderLocations(locations, loaded, theme) {
  return locations.length > 0 ? (
    <CardsContainer>
      {locations.map((loc, key) => (
        <LocationCard
          title={loc.description}
          address={loc.full_address}
          hours={loc.hours}
          phone={loc.phone}
          key={key}
        />
      ))}
    </CardsContainer>
  ) : (
    <div>
      {loaded ? (
        <div>
          <NoResults>Sorry</NoResults>
          <NoResultsP>There are no results in your area</NoResultsP>
        </div>
      ) : (
        ""
      )}
      <Img
        src={loaded ? theme.sadManImg : walkingImage}
        marginTop={loaded ? "51" : "108"}
      />
    </div>
  );
}

const LocationsPage = ({ theme }) => {
  const { materialId } = useParams();
  const [zip, setZip] = useState("");
  const [loading, setLoading] = useState(false);
  const [locations, setLocations] = useState([]);
  const gps = JSON.parse(localStorage.getItem("gps"));
  const [getLocations, locationInfo] = useLazyQuery(GET_LOCATIONS);
  const [getPostal, postalInfo] = useLazyQuery(GET_POSTAL);
  const [getZip, zipInfo] = useLazyQuery(GET_ZIP);

  useEffect(() => {
    if (gps) {
      const { latitude, longitude } = gps;
      //Set zip code field to contain current users zip code location
      getZip({
        variables: {
          latitude: latitude.toString(),
          longitude: longitude.toString()
        }
      });

      //Search for nearby centers automatically
      setLoading(true);
      getLocations({
        variables: {
          latitude,
          longitude,
          material_id: parseInt(materialId)
        }
      });
    }
  }, [location]);

  useEffect(() => {
    if (zipInfo.called && zipInfo.data) {
      setZip(zipInfo.data.getZip.postal_code.slice(0, 5));
    }
  }, [zipInfo]);

  useEffect(() => {
    if (postalInfo.called && postalInfo.data) {
      const { longitude, latitude } = postalInfo.data.postal_code;
      getLocations({
        variables: {
          latitude,
          longitude,
          material_id: parseInt(materialId)
        }
      });
    }
    //invalid postal_codes still return objects but nothing that is resolved by our backend
    if (
      !postalInfo.loading &&
      postalInfo.postal_code !== 0 &&
      !locationInfo.loading &&
      locationInfo.called
    ) {
      setLoading(false);
    }
  }, [postalInfo]);

  useEffect(() => {
    if (locationInfo.called && locationInfo.data && !locationInfo.loading) {
      setLocations(locationInfo.data.locations);
      setLoading(false);
    }
  }, [locationInfo.loading, locationInfo.called, locationInfo.data]);

  const handleClick = () => {
    if (
      postalInfo.variables &&
      postalInfo.variables.postal_code &&
      postalInfo.variables.postal_code === zip
    ) {
      return;
    }

    if (validateZip(zip)) {
      setLoading(true);
      console.log("Searching for ", zip);
      getPostal({
        variables: {
          postal_code: zip
        }
      });
    } else alert("Please enter a valid 5-digit US zip code");
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") if (zip.length >= 5) handleClick();
  };

  return (
    <Container>
      <Blurb>Where can I bring this?</Blurb>
      <ZipSearchBar
        handleClick={handleClick}
        value={zip}
        onChange={e => setZip(e.target.value)}
        btnDisabled={zip.length < 5 || loading}
        onKeyDown={handleKeyDown}
      />

      {loading ? (
        <Spinner />
      ) : (
        renderLocations(locations, locationInfo.called, theme)
      )}
    </Container>
  );
};

export default withTheme(LocationsPage);
