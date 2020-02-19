import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import BottomNav from "../molecules/BottomNav";
import { cameraAsyncHook } from "./hooks/CameraAsyncHook";
import Spinner from "../atoms/Spinner";

import ResultsTab from "../molecules/ResultsTab";

///CURRENT ISSUE: Getting TypeError when using back or home button because the canvas element is taken off the DOM but the animation frames are still running, meaning the animation frames are looking for something that is no longer defined

const Root = styled.div`
  max-width: 575px;
  display: flex;
`;

const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: "environment" }
};

const CameraPage = () => {
  //these need to be mutable
  let originalWidth = window.innerWidth > 575 ? "575px" : window.innerWidth;
  let originalHeight =
    window.innerHeight > 1000 ? "1000px" : window.innerHeight;

  //////////////////////////////////////////////////CANVAS\\\\\\\\\\\\\\\\\\\\
  const canvasRef = useRef();
  const [renewals, setRenewals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenewals([1]);
    }, 5000);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    if (canvasRef.current && canvasRef.current.getContext) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, window.innerHeight, window.innerWidth);
      requestAnimationFrame(repeatOften);
    }
  }); //handleCanPlay was what I originally used to initiate this during development, but we actually want this to be a continual side effect regardless of whether videoRef has current or not.

  useEffect(() => {
    originalWidth = window.innerWidth > 575 ? "575px" : window.innerWidth;
    originalHeight = window.innerHeight > 1000 ? "1000px" : window.innerHeight;
  }, [originalWidth, originalHeight]);

  //to get base64
  function handleImageSave() {
    const dataURL = canvasRef.current.toDataURL();
    console.log(dataURL);
  }

  ////////////////////////////////////VIDEO\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  const videoRef = useRef();

  const videoSrc = cameraAsyncHook(CAPTURE_OPTIONS);

  if (videoSrc && videoRef.current && !videoRef.current.srcObject) {
    // && !videoRef.current.srcObject keeps it from doing an infinite loop, (it is only rerendering if the srcObject has not been set yet)
    videoRef.current.srcObject = videoSrc;
    setLoading(false);
  }

  function handleCanPlay() {
    videoRef.current.play();
  }

  if (!videoSrc) {
    return null;
  }
  //CAN'T USE srcObject in REACT, Abramov says to use refs and just assign with DOM API directly
  // depreciated pattern:   videoSrc = URL.createObjectURL(stream);

  ///////////////////////////////////////////VIDEO PLUS CANVAS\\\\\\\\\\\\\\\\\
  function drawVid(video, ctx, width, height) {
    ctx.drawImage(video, 0, 0, width, height);
  }

  function repeatOften() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    drawVid(videoRef.current, ctx, originalWidth, originalHeight);
    requestAnimationFrame(repeatOften);
  }

  //You cannot call the drawImage() method before the image has loaded. To ensure that the image has been loaded, you can call drawImage() from window.onload() or from document.getElementById("imageID").onload.

  return (
    <Root>
      {loading ? <Spinner /> : null}
      <video
        ref={videoRef}
        hidden={true}
        width={originalWidth}
        height={originalHeight}
        onCanPlay={handleCanPlay}
        muted
        autoPlay={true}
        // src={videoSrc}//srcObject expects mediaStream object, not string as src does
      />
      <canvas
        ref={canvasRef}
        width={originalWidth}
        height={originalHeight}
        // style={{ zIndex: 10001, width: "inherit" }}
        onClick={e => {
          handleImageSave();
        }}
        hidden={loading ? true : false}
      />
      <ResultsTab />
    </Root>
  );
};

export default CameraPage;
