import React, { useState, useEffect, useRef } from "react";
import CameraPhoto, { FACING_MODES } from "jslib-html5-camera-photo";

import styled from "styled-components";
import Spinner from "../atoms/Spinner";

import ResultsTab from "../molecules/ResultsTab";

const Root = styled.div`
  max-width: 575px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const StyledVideo = styled.video`
  display: ${({ hidden }) => (hidden ? "none" : "block")}};
`;

const CameraPage = ({ shutterPress }) => {
  const [image, setImage] = useState();
  const videoRef = useRef(null);
  const [cameraInstance, setCameraInstance] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (shutterPress) {
      const config = {
        sizeFactor: 1
      };

      if (cameraInstance) {
        const dataUri = cameraInstance.getDataUri(config);
        console.log(dataUri);
        setImage({ dataUri });
        cameraInstance.stopCamera();
      }
    } else {
      setImage(null);
      setLoading(true);
    }
  }, [shutterPress]);

  useEffect(() => {
    // create video stream
    if (videoRef) {
      const cameraPhoto = new CameraPhoto(videoRef.current);
      setCameraInstance(cameraPhoto);
    }
  }, [videoRef]);

  useEffect(() => {
    const facingMode = FACING_MODES.ENVIRONMENT;

    //set width to height to fix mobile camera
    const height = window.innerWidth > 575 ? 575 : window.innerWidth;
    const idealResolution = {
      height,
      width: window.innerHeight
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
  }, [cameraInstance, shutterPress]);

  return (
    <Root>
      {loading && <Spinner />}
      <StyledVideo hidden={image || !videoRef} ref={videoRef} autoPlay={true} />
      {image && <img src={image.dataUri} alt="camera image" />}
      <ResultsTab />
    </Root>
  );
};

export default CameraPage;
