import React, { useState, useEffect } from "react";
import styled from "styled-components";
import arrowImg from "../images/back_arrow_lite.svg";
import { Link, useLocation, useHistory } from "react-router-dom";

const NavBar = styled.div`
  position: absolute;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  left: 16px;
  right: 16px;
`;

const TopNav = ({ searchFocus }) => {
  const [isHome, setIsHome] = useState(true);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    setIsHome(location.pathname === "/");
  }, [location.pathname]);

  const handleBackClick = () => {
    history.goBack();
  };

  return (
    <NavBar>
      {!isHome && <img onClick={handleBackClick} src={arrowImg} />}

      {!isHome && (
        <Link to="/">
          <svg
            width="22"
            height="24"
            viewBox="0 0 22 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#404040"
          >
            <path d="M13.8521 15.3252H7.91207C7.4248 15.3252 7.02991 15.7201 7.02991 16.2074V24H8.79427V17.0896H12.9697V24H14.734H14.7343V16.2074C14.7343 15.7201 14.3394 15.3252 13.8521 15.3252Z" />
            <path d="M11.4649 0.221758L21.463 9.07297C21.6523 9.24033 21.7606 9.48084 21.7606 9.73345V23.1132C21.7606 23.6005 21.3657 23.9954 20.8784 23.9954H14.8869C13.9124 23.9954 13.1225 23.2055 13.1225 22.2311H19.9962V10.1307L10.8803 2.0605L1.76441 10.1307V22.2311H8.81081V23.9954H0.882206C0.39494 23.9954 0 23.6005 0 23.1132V9.73345C0 9.48084 0.108214 9.24028 0.297318 9.07297L10.2954 0.221758C10.6292 -0.07406 11.1311 -0.0737788 11.4649 0.221758Z" />
          </svg>
        </Link>
      )}
    </NavBar>
  );
};

export default TopNav;
