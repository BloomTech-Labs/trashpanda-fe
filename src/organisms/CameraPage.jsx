import React, { useState, useEffect, useRef } from "react";
import CameraPhoto, { FACING_MODES } from "jslib-html5-camera-photo";
import gql from "graphql-tag";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";

import styled from "styled-components";
import Spinner from "../atoms/Spinner";

import ClusterResult from "../molecules/ClusterResult";

const Root = styled.div`
  max-width: 800px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const StyledVideo = styled.video`
  display: ${({ hidden }) => (hidden ? "none" : "block")}};
`;

export const GET_CLUSTER = gql`
  query Cluster($imageData: String!) {
    getCluster(imageData: $imageData) {
      message
      cluster_name
      cluster
      materials {
        material_id
        description
        long_description
        bin_trash
        bin_recycle
        bin_compost
        dropoff
        pickup
        notes
        image_url
      }
    }
  }
`;

const ShutterButton = ({ theme }) => {
  if (theme.name === "Light") {
    return (
      <svg
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="35"
          cy="35"
          r="31.5"
          fill="#D9D9D9"
          stroke="#336B68"
          strokeWidth="3"
        />
        <circle cx="35" cy="35" r="33.5" stroke="white" strokeWidth="3" />
      </svg>
    );
  } else {
    return (
      <svg
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="35"
          cy="35"
          r="31.5"
          fill="#D9D9D9"
          stroke="#336B68"
          strokeWidth="3"
        />
        <circle cx="35" cy="35" r="33.5" stroke="white" strokeWidth="3" />
      </svg>
    );
  }
};

const StyledShutterButton = styled.div`
  position: absolute;
  z-index: 7;
  margin: auto;
  bottom: 20px;
`;

const FullFrame = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
`;

const startCam = (cameraInstance, setLoading) => {
  const facingMode = FACING_MODES.ENVIRONMENT;

  //set width to height to fix mobile camera
  const height = window.innerWidth > 800 ? 800 : window.innerWidth;
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
};

const CameraPage = ({
  theme,
  setShutterPress,
  shutterPress,
  setAppCluster,
  setSearchFocus
}) => {
  const [image, setImage] = useState();
  const videoRef = useRef(null);
  const [cameraInstance, setCameraInstance] = useState();
  const [loading, setLoading] = useState(true);
  const [getCluster, ClusterData] = useLazyQuery(GET_CLUSTER);

  const handleShutterButton = () => {
    setShutterPress(true);
  };

  useEffect(() => {
    if (!ClusterData.loading) {
      setLoading(false);
    }

    if (!ClusterData.loading && ClusterData.data) {
      setAppCluster(ClusterData.data.getCluster);
    }
  }, [ClusterData]);

  useEffect(() => {
    if (shutterPress) {
      const config = {
        sizeFactor: 1
      };

      if (cameraInstance) {
        const dataUri = cameraInstance.getDataUri(config);
        setImage({ dataUri });
        cameraInstance.stopCamera();
        getCluster({
          variables: {
            imageData: dataUri
          }
        });
        setLoading(true);
      }
    } else {
      setImage(null);
      setLoading(true);
      startCam(cameraInstance, setLoading);
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
    startCam(cameraInstance, setLoading);

    return function cleanup() {
      if (cameraInstance && cameraInstance.stream) {
        console.log("running cleanup");
        setImage(null);
        setShutterPress(false);

        cameraInstance
          .stopCamera()
          .then(() => {
            console.log("stopped camera");
          })
          .catch(err => console.log("camera not running"));
      }
    };
  }, [cameraInstance]);

  return (
    <Root>
      {loading && <Spinner />}
      <StyledVideo
        hidden={shutterPress || !videoRef}
        ref={videoRef}
        autoPlay={true}
      />
      {image && <img src={image.dataUri} alt="camera image" />}
      {!ClusterData.loading && (ClusterData.data || ClusterData.error) && (
        <ClusterResult
          shutterPress={shutterPress}
          setShutterPress={setShutterPress}
          ClusterData={ClusterData}
          setSearchFocus={setSearchFocus}
        />
      )}
      {!shutterPress && (
        <FullFrame>
          <StyledShutterButton onClick={handleShutterButton}>
            <ShutterButton theme={theme} />
          </StyledShutterButton>
        </FullFrame>
      )}
    </Root>
  );
};

export default CameraPage;
