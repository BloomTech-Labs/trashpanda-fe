import React, { useState, useEffect } from "react";
import { withTheme } from "styled-components";
import Stepper from "../molecules/Stepper";
import styled from "styled-components";
import Button from "../atoms/Button";

import location from "../utils/UserLocation";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { useHistory } from "react-router-dom";

import photoImg from "../images/photo_illustration.svg";

// CURRENT ISSUES: next button no longer working on desktop view, button and stepper misaligned on desktop

const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.body};
`;

const Title = styled.h2`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  font-size: 28px;
  color: ${({ theme }) => theme.text};

  margin-top: 20px;
  margin-bottom: 25px;
`;

const SubTitle = styled.h3`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  text-align: center;

  color: ${({ theme }) => theme.text};
  margin-top: 30px;
  margin-bottom: 11px;
  margin-left: 30px;
  margin-right: 30px;
  height: 50px;
`;

const Img = styled.img`
  margin-bottom: ${props => props.marginBottom}px;
`;

const PText = styled.p`
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;
  text-align: center;

  color: ${({ theme }) => theme.text};

  margin-left: 60px;
  margin-right: 60px;
  margin-top: 0px;
  margin-bottom: ${props => props.marginBottom}px;

  height: 76px;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

let p1, p2, p3;

let startingX;

function renderPage(step, theme, handleNext, setStep) {
  function handleTouchStart(e, prev, current, next) {
    startingX = e.touches[0].clientX;
    // console.log("e touches starting", startingX); /////////////OK
    if (current === p1) {
      return;
    } else {
      prev.style.transition = "";
      current.style.transition = "";
      prev.style.display = "flex";
    }
  }

  function handleTouchMove(e, prev, current, next) {
    ///YAYAYAYA!
    const touch = e.touches[0];
    const change = startingX - touch.clientX;
    // console.log("move", touch.clientX);
    // console.log("move change", change);
    //e.preventDefault();
    if ((current === p1 && change < 0) || (current === p3 && change > 0)) {
      return;
    } else if ((current === p1 || current === p2) && change > 0) {
      current.style.left -= change + "px"; //"-" +
      next.style.display = "flex";
      next.style.left -= change + "px"; //was screen not current.style, screen.width -
      //console.log("nexty", next.style.left);
    } else if (current === p2 && change < 0) {
      prev.style.left -= change + "px"; //plus negative
      prev.style.display = "flex";
      current.style.left = screen.width - change + "px"; //should already be a negative number
      next.style.display = "none";
      //console.log("current.style.left", current.style.left);
    } else if (current === p3 && change < 0) {
      prev.style.left -= change + "px"; //plus negative
      prev.style.display = "flex";
      current.style.left -= change + "px";
    }
  }

  async function handleTouchEnd(e, prev, current, next) {
    // console.log("e end", e.changedTouches[0].clientX); /////OK
    // console.log("current end", current);
    // console.log("next end", next);
    // console.log("prev end", prev);
    const change = startingX - e.changedTouches[0].clientX;
    const screenThreshold = screen.width / 30;
    // console.log("change end", change);
    // console.log("screenThreshold", screenThreshold);
    const invertedChange = change * -1;
    // console.log("ic", invertedChange);
    //e.preventDefault();
    if (0 < change && change < screenThreshold && next !== "out of bounds") {
      current.style.left = 0;
      next.style.left = "100%";
      next.style.display = "none";
    } else if (
      0 < change &&
      change > screenThreshold &&
      next !== "out of bounds"
    ) {
      current.style.transition = "all .3s";
      next.style.transition = "all .3s";
      next.style.display = "flex";
      current.style.left = "-100%";
      next.style.left = 0;
      current.style.display = "none";
      handleNext();
    } else if (
      change < 0 &&
      invertedChange < screenThreshold &&
      prev !== "out of bounds"
    ) {
      current.style.left = 0;
      prev.style.left = "-100%";
      prev.style.display = "none";
      next.style.display = "none";
    } else if (invertedChange > screenThreshold && prev !== "out of bounds") {
      current.style.transition = "all .3s";
      prev.style.transition = "all .3s";
      current.style.left = "100%";
      prev.style.left = 0;
      prev.style.display = "flex";
      setStep(step - 1);
    } else {
      return "error on touchend negative change";
    }
  }

  let nextButtonDisplay;

  nextButtonDisplay = screen.width < 800 ? "none" : "flex";

  if (step === 3) {
    handleNext();
  }

  return (
    <div>
      <CenterContainer
        id="first"
        style={{
          display: "flex",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "90vh"
        }}
        onTouchStart={e => {
          handleTouchStart(e, "out of bounds", p1, p2);
          setStep(1);
        }}
        onTouchMove={e => handleTouchMove(e, "out of bounds", p1, p2)}
        onTouchEnd={e => {
          handleTouchEnd(e, "out of bounds", p1, p2);
        }}
      >
        <Title>Trash Panda</Title>
        <PText marginBottom="60">
          Here to help you create better recycling habits.
        </PText>
        <Img marginBottom="38" src={theme.trashManImg} />
      </CenterContainer>

      <CenterContainer
        id="second"
        style={{
          display: "none",
          position: "absolute",
          top: 0,
          left: "100%",
          width: "100%",
          height: "90vh"
        }}
        onTouchStart={e => {
          handleTouchStart(e, p1, p2, p3);
        }}
        onTouchMove={e => handleTouchMove(e, p1, p2, p3)}
        onTouchEnd={async e => {
          handleTouchEnd(e, p1, p2, p3);
        }}
      >
        <SubTitle>Certain areas have different regulations.</SubTitle>
        <PText marginBottom="35">
          Let us use your location to help you properly dispose of the item.
        </PText>
        <Img
          marginBottom={theme.locationIllustrationMargin}
          src={theme.locationIllustrationImg}
        />
      </CenterContainer>

      <CenterContainer
        id="third"
        style={{
          display: "none",
          position: "absolute",
          top: 0,
          left: "200%",
          width: "100%",
          height: "90vh"
        }}
        onTouchStart={e => {
          handleTouchStart(e, p2, p3, "out of bounds");
          setStep(3);
        }}
        onTouchMove={e => handleTouchMove(e, p2, p3, "out of bounds")}
        onTouchEnd={e => {
          handleTouchEnd(e, p2, p3, "out of bounds");
        }}
      >
        <SubTitle>Snap a photo of the item you want to recycle.</SubTitle>
        <PText marginBottom="49">
          We’ll tell you what it’s made of and how to properly dispose of it.
        </PText>
        <Img marginBottom="60" src={photoImg} />
      </CenterContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginTop: "450%"
        }}
      >
        <Stepper amount={3} currentStep={step} />
        <Button
          onClick={handleNext}
          style={{ marginTop: "20px", zIndex: 3, display: nextButtonDisplay }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
//style={{ position: "absolute", bottom: "15vh" }}
//style={{ position: "absolute", bottom: "10vh" }}
function getCamera(onSuccess, onError) {
  const constraints = (window.constraints = {
    audio: false,
    video: true
  });

  if (navigator.mediaDevices) {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(stream => {
        if (onSuccess) onSuccess();
        stream.getTracks().forEach(function(track) {
          track.stop();
        });
      })
      .catch(err => {
        if (onError) onError(err);
        stream.getTracks().forEach(function(track) {
          track.stop();
        });
      });
  } else {
    //Media devices api does not support user
    console.log("Browser does not support media devices API");
  }
}

const DraftTutorialPage = ({ theme }) => {
  const [step, setStep] = useState(1);
  const history = useHistory();

  useEffect(() => {
    p1 = document.getElementById("first");

    p2 = document.getElementById("second");

    p3 = document.getElementById("third");
  }, []);

  // useEffect(() => {
  //   //NOT WORKING!!!
  //   if (p3.style.left == 0) {
  //     setStep(step + 1);
  //   }
  //   if (p2.style.left < 0) {
  //     setStep(step + 1);
  //   }
  //   if (p2.style.left === 0) {
  //     setStep(step + 1);
  //   }
  // }, [p2, p3]);

  console.log("step", step);
  const handleNext = () => {
    switch (step) {
      case 3: {
        localStorage.setItem(
          "permissions",
          JSON.stringify({ firstVisit: false })
        );
        getCamera(
          () => history.push("/"),
          () => history.push("/")
        );
        break;
      }
      case 2:
        location.setGps(
          () => {
            setStep(3);
          },
          () => {
            setStep(3);
          }
        );
        break;

      default:
        setStep(step + 1);
    }
  };

  return <Container>{renderPage(step, theme, handleNext, setStep)}</Container>;
};

export default withTheme(DraftTutorialPage);
