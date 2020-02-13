import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BottomNav from "../molecules/BottomNav";

const Root = styled.div``;

const CameraPage = () => {
  const [locations, setLocations] = React.useState([]);
  const canvasRef = React.useRef();
  const videoRef = React.useRef();
  const vendorUrl = window.URL;

  let originalWidth = window.innerWidth;
  let originalHeight = window.innerHeight;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, window.innerHeight, window.innerWidth);
    locations.forEach(location => draw(ctx, location));
  }, [locations]);

  useEffect(() => {
    originalWidth = window.innerWidth;
  }, [originalWidth]);

  useEffect(() => {
    originalHeight = window.innerHeight;
  }, [originalHeight]);
  //const dataURL = canvas.toDataURL() to get base64

  function handleImageSave() {
    const dataURL = canvasRef.current.toDataURL();
    console.log(dataURL);
  }

  const HOOK_SVG =
    "m129.03125 63.3125c0-34.914062-28.941406-63.3125-64.519531-63.3125-35.574219 0-64.511719 28.398438-64.511719 63.3125 0 29.488281 20.671875 54.246094 48.511719 61.261719v162.898437c0 53.222656 44.222656 96.527344 98.585937 96.527344h10.316406c54.363282 0 98.585938-43.304688 98.585938-96.527344v-95.640625c0-7.070312-4.640625-13.304687-11.414062-15.328125-6.769532-2.015625-14.082032.625-17.960938 6.535156l-42.328125 64.425782c-4.847656 7.390625-2.800781 17.3125 4.582031 22.167968 7.386719 4.832032 17.304688 2.792969 22.160156-4.585937l12.960938-19.71875v42.144531c0 35.582032-29.863281 64.527344-66.585938 64.527344h-10.316406c-36.714844 0-66.585937-28.945312-66.585937-64.527344v-162.898437c27.847656-7.015625 48.519531-31.773438 48.519531-61.261719zm-97.03125 0c0-17.265625 14.585938-31.3125 32.511719-31.3125 17.929687 0 32.511719 14.046875 32.511719 31.3125 0 17.261719-14.582032 31.3125-32.511719 31.3125-17.925781 0-32.511719-14.050781-32.511719-31.3125zm0 0";
  const HOOK_PATH = new Path2D(HOOK_SVG);
  const SCALE = 0.3;
  const OFFSET = 80;
  function draw(ctx, location) {
    ctx.fillStyle = "deepskyblue";
    ctx.shadowColor = "dodgerblue";
    ctx.shadowBlur = 20;
    ctx.save();
    ctx.scale(SCALE, SCALE);
    ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET);
    ctx.fill(HOOK_PATH);
    ctx.restore();
  }

  //   var p = navigator.mediaDevices.getUserMedia({
  //     audio: false,
  //     video: { facingMode: "environment" }
  //   });

  //   p.then(function(stream) {
  //     console.log(stream);
  //   });

  //   useEffect(() => {
  //     const video = videoRef.current;
  //     video.srcObject = p;
  //     video.play();
  //   }, []);

  return (
    <Root>
      <video ref={videoRef} width={originalWidth} height={originalHeight} />
      <canvas
        ref={canvasRef}
        width={originalWidth}
        height={originalHeight}
        background="black"
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
