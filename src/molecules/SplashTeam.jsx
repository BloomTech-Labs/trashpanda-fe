import React from "react";
import SplashNav from "./SplashNav";
import SplashTeamCard from "./SplashTeamCard";
import styled from "styled-components";

//images
import trevorImg from "../images/trevor_clack.png";
import timothyImg from "../images/timothy_hsu.png";
import veraImg from "../images/vera_mendes.png";
import markAImg from "../images/mark_artishuk.png";
import markHImg from "../images/mark_halls.png";
import lynnImg from "../images/lynn_baxter.png";
import carloImg from "../images/carlo_lucido.png";
import colinImg from "../images/colin_bazzano.png";
import tobiasImg from "../images/tobias_reaper.png";
import kendraImg from "../images/kendra_mckernan.png";
import jtImg from "../images/jt_kernan.png";

const Container = styled.div``;

const ContentContainer = styled.div`
  margin-top: 77px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  text-align: center;

  color: #000000;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 878px;
`;

const SplashTeam = () => {
  return (
    <Container>
      <SplashNav />
      <ContentContainer>
        <Title>The Trash Panda Team</Title>

        <CardContainer>
          <SplashTeamCard
            width="124px"
            margin="20px 38px 30px 51px"
            name="Trevor Clack"
            title="Data Science"
            image={trevorImg}
          />

          <SplashTeamCard
            width="118px"
            margin="20px 27px 30px 0px"
            name="Timothy Hsu"
            title="Data Science"
            image={timothyImg}
          />
          <SplashTeamCard
            width="162px"
            margin="20px 7px 30px 0px"
            name="Kendra McKernan"
            title="UX Design"
            image={kendraImg}
          />
          <SplashTeamCard
            width="142px"
            margin="20px 29px 30px 0px"
            name="Carlo Lucido"
            title="Web Developer"
            image={carloImg}
          />
          <SplashTeamCard
            width="162px"
            margin="20px 18px 30px 0px"
            name="Colin Bazzano"
            title="Web Developer"
            image={colinImg}
          />
          <SplashTeamCard
            width="130px"
            margin="0px 30px 0px 48px"
            name="Vera Mendes"
            title="Data Science"
            image={veraImg}
          />

          <SplashTeamCard
            width="128px"
            margin="0px 48px 0px 0px"
            name="Tobias Reaper"
            title="Data Science"
            image={tobiasImg}
          />
          <SplashTeamCard
            width="110px"
            margin="0px 39px 0px 0px"
            name="Lynn Baxter"
            title="UX Design"
            image={lynnImg}
          />
          <SplashTeamCard
            width="130px"
            margin="0px 41px 0px 0px"
            name="Mark Artishuk"
            title="Web Developer"
            image={markAImg}
          />
          <SplashTeamCard
            width="150px"
            margin="0px 24px 0px 0px"
            name="Mark Halls"
            title="Web Developer"
            image={markHImg}
          />
          <SplashTeamCard
            width="130px"
            margin="30px 0px 20px 0px"
            name="JT Kernan"
            title="Project Lead"
            image={jtImg}
          />
        </CardContainer>
      </ContentContainer>
    </Container>
  );
};

export default SplashTeam;
