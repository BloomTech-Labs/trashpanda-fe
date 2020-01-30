import React, { useEffect, useState } from "react";
import styled from "styled-components";
import homeImg from "../images/home.svg";
import backArrowImg from "../images/arrow_back.svg";
import { Link, useLocation, useHistory } from "react-router-dom";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

const Title = styled.h2`
  color: #000000;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  margin: 0;
  padding: 0;
`;

const DivButton = styled.div`
  cursor: pointer;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const BackText = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: #000000;
  margin: 0;
  padding: 0;
  margin-left: 30px;
`;

const NavBar = () => {
  const [isHome, setIsHome] = useState(true);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [location.pathname]);

  const handleBackClick = () => {
    history.goBack();
  };
  return (
    <Header>
      {isHome ? (
        <Title>Trash Panda</Title>
      ) : (
        <FlexContainer>
          <DivButton onClick={handleBackClick}>
            <img src={backArrowImg} alt="go back" />
          </DivButton>
          <BackText>Back</BackText>
        </FlexContainer>
      )}

      <Link to="/">
        <img src={homeImg} alt="home" />
      </Link>
    </Header>
  );
};

export default NavBar;
