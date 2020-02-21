import React, { useState, useEffect, useRef } from "react";
import CameraPhoto, { FACING_MODES } from "jslib-html5-camera-photo";

import styled from "styled-components";
import BottomNav from "../molecules/BottomNav";
import { cameraAsyncHook } from "./hooks/CameraAsyncHook";
import Spinner from "../atoms/Spinner";

import ResultsTab from "../molecules/ResultsTab";

const Root = styled.div`
  max-width: 575px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const CameraPage = () => {
  const [image, setImage] = useState();
  const [videoRef, setVideoRef] = useState();
  const [cameraInstance, setCameraInstance] = useState();
  const [loading, setLoading] = useState(true);

  const takePhoto = () => {
    // placeholder function to take photo. needs to be hooked into buttons in nav

    const config = {
      sizeFactor: 1
    };

    if (cameraInstance) {
      const dataUri = cameraInstance.getDataUri(config);
      console.log(dataUri);
      setImage({ dataUri });
    }
  };

  useEffect(() => {
    // create video ref
    const videoRef = React.createRef();
    setVideoRef(videoRef);
  }, []);

  useEffect(() => {
    // create video stream
    if (videoRef) {
      const cameraPhoto = new CameraPhoto(videoRef.current);
      setCameraInstance(cameraPhoto);
    }
  }, [videoRef]);

  useEffect(() => {
    const facingMode = FACING_MODES.ENVIRONMENT;
    const width = window.innerWidth > 575 ? 575 : window.innerWidth;
    const idealResolution = {
      width,
      height: window.innerHeight
    };

    if (cameraInstance) {
      cameraInstance
        .startCamera(facingMode, idealResolution)
        .then(() => {
          console.log("camera is started !");
          setLoading(false);
        })
        .catch(error => {
          console.error("Camera not started!", error);
        });
    }
  }, [cameraInstance]);

  return (
    <Root>
      {loading && <Spinner />}
      {videoRef && <video ref={videoRef} autoPlay={true} />}
      <ResultsTab />
    </Root>
  );
};

export default CameraPage;
