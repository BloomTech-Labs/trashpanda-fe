import React from "react";

import styled from "styled-components";
import splashImg from "../images/splash_image.svg";
import playBadgeImg from "../images/google-play-badge.png";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 99px;
`;

const Image = styled.img``;

const PlayBadge = styled.img`
  height: 50px;
  transform: translateY(28px);
  margin-left: 140px;
`;

const OverlapTitle = styled.h2`
  position: absolute;
  top: -40px;
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 40px;
  width: 640px;

  color: #404040;
`;

const Title = styled.h2`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 40px;
  // width: 640px;

  color: #404040;
  margin-top: 85px;
`;

const PText = styled.p`
  font-family: Muli;
  font-style: normal;
  font-size: 26px;
  line-height: 33px;

  color: #404040;
`;

const ContentContainer = styled.div`
  width: 650px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 140px;
`;

const SplashMainContent = () => {
  return (
    <Container>
      <OverlapTitle>
        We want to help you create better recycling habits
      </OverlapTitle>
      <Image src={splashImg} />

      <ContentContainer>
        <Title>
          Trash Panda helps you figure out what to do with any kind of trash you
          may encounter in your life.
        </Title>

        <PText>
          Each city, county, and state has different regulations that apply to
          trash disposal. Some cities don’t compost, but do offer recycling.
          Some offer only off-site recycling. To top it all off, most centers
          only recycle certain items! All of this leads to a lot of trash being
          incorrectly sorted, costing these programs money and making a huge
          impact on the environment.
        </PText>

        <Title>It can be confusing, so we’re here to help.</Title>
        <PText>
          We’ve created an app that lets you search for an item in a few
          different ways, then we’ll let you know what it’s made of and how you
          can recycle it in your area.
        </PText>
        <FlexContainer>
          <Title>Amazing, right?</Title>
          <a href="https://play.google.com/store/apps/details?id=com.thetrashpanda.twa">
            <PlayBadge src={playBadgeImg} />
          </a>
        </FlexContainer>
      </ContentContainer>
    </Container>
  );
};

export default SplashMainContent;
