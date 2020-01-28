import React, { useEffect, useState } from "react";
import styled from "styled-components";
import trashPandaImg from "../images/trashpanda.svg";
import homeImg from "../images/home.svg";
import backArrowImg from "../images/arrow_back.svg";
import { Link, useLocation, useHistory } from "react-router-dom";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2px 10px;
`;

const Title = styled.h2`
  font-size: 20px;
  color: #000000;
  font-style: normal;
  font-weight: normal;
  margin: 0;
  padding: 0;
`;

const DivButton = styled.div`
  cursor: pointer;
`;

const NavBar = () => {
  const [isHome, setIsHome] = useState(true);
  const location = useLocation();
  const history = useHistory();

  console.log("rendered");
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
        <img src={trashPandaImg} alt="logo" />
      ) : (
        <DivButton onClick={handleBackClick}>
          <img src={backArrowImg} alt="go back" />
        </DivButton>
      )}
      <Title>Trash Panda</Title>

      <Link to="/">
        <img src={homeImg} alt="home" />
      </Link>
    </Header>
  );
};

export default NavBar;
