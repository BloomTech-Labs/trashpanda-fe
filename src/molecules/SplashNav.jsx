import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import playBadgeImg from "../images/google-play-badge.png";

const Container = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0px 30px;
  width: 100%;
  box-sizing: border-box;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Title = styled.h2`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 35px;
  color: #404040;

  margin: 0px;
  margin-right: 66px;
`;

const NavLink = styled.div`
  a {
    font-family: Muli;
    font-style: normal;
    font-weight: ${props => (props.selected ? "bold" : "normal")};
    font-size: 18px;
    line-height: 23px;
    color: ${props => (props.selected ? "#404040" : "#737373")};

    text-decoration: none;
    margin-right: 54px;
  }
`;

const PlayBadge = styled.img`
  height: 50px;
  transform: translateY(10px);
  margin-right: 70px;
`;

const SplashNav = () => {
  const [selectedPage, setSelectedPage] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case "/splash":
        setSelectedPage(0);
        break;
      case "/splash/team":
        setSelectedPage(1);
        break;
    }
  }, [pathname]);

  return (
    <Container>
      <FlexContainer>
        <Title>Trash Panda</Title>
        <NavLink selected={selectedPage == 0}>
          <Link to="/splash">What We Do</Link>
        </NavLink>
        <NavLink selected={selectedPage == 1}>
          <Link to="/splash/team">Meet the Team</Link>
        </NavLink>
      </FlexContainer>
      <a href="https://play.google.com/store/apps/details?id=com.thetrashpanda.twa">
        <PlayBadge src={playBadgeImg} />
      </a>
    </Container>
  );
};

export default SplashNav;
