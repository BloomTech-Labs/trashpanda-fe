import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import BottomNav from "../molecules/BottomNav";
import { cameraAsyncHook } from "./hooks/CameraAsyncHook";
const Root = styled.div``;

const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: "environment" }
};

const CameraPage = () => {
  let originalWidth = window.innerWidth;
  let originalHeight = window.innerHeight;
  //CANVAS

  const canvasRef = useRef();
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    if (canvasRef.current && canvasRef.current.getContext) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, window.innerHeight, window.innerWidth);
      //   drawVid(videoRef.current, ctx, originalWidth, originalHeight);
      requestAnimationFrame(repeatOften);
    }
  }, [handleCanPlay]);

  useEffect(() => {
    originalWidth = window.innerWidth;
  }, [originalWidth]);

  useEffect(() => {
    originalHeight = window.innerHeight;
  }, [originalHeight]);

  //to get base64
  function handleImageSave() {
    const dataURL = canvasRef.current.toDataURL();
    console.log(dataURL);
  }

  //VIDEO
  const videoRef = useRef();
  //   const video = videoRef.current;

  const videoSrc = cameraAsyncHook(CAPTURE_OPTIONS);

  if (videoSrc && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = videoSrc;
    console.log(videoRef.current.srcObject);
  }

  function handleCanPlay() {
    videoRef.current.play();
  }

  if (!videoSrc) {
    return null;
  }

  //CAN'T USE srcObject in REACT, Abramov says to use refs and just assign with DOM API directly

  // depreciated pattern:   videoSrc = URL.createObjectURL(stream);

  //VIDEO PLUS CANVAS
  function drawVid(video, ctx, width, height) {
    ctx.drawImage(video, 0, 0, width, height);
    // requestAnimationFrame(drawVid);
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
      <video
        ref={videoRef}
        hidden={true}
        width={originalWidth}
        height={originalHeight}
        onCanPlay={handleCanPlay}
        playsInline
        muted
        autoPlay={true}
        // src={videoSrc}//srcObject expects mediaStream object, not string as src does
      />
      <canvas
        ref={canvasRef}
        width={originalWidth}
        height={originalHeight}
        style={{ zIndex: 10001 }}
        onClick={e => {
          const newLocation = { x: e.clientX, y: e.clientY };
          setLocations([...locations, newLocation]);
          handleImageSave();
        }}
      />
      <BottomNav />
    </Root>
  );
};

export default CameraPage;
