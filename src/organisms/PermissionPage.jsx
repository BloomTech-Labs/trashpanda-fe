import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";

import { useHistory } from "react-router-dom";
import location from "../utils/UserLocation";

const Container = styled.div`
  margin: 35px 18px;
`;

const BoldPrompt = styled.h2`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;

  color: #404040;
`;

const SubText = styled.p`
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;

  color: #404040;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 63px;
`;

const BtnInvertedContainer = styled.div`
  margin-top: 45px;
`;

const PermissionPage = () => {
  const history = useHistory();
  const [gpsMutation] = location.gpsMutationHook();

  const handleAccept = () => {
    location.setGpsCache(gpsMutation);
    //set current location (mutation)
    //set rejectedPermissions: false
    // getLocation(handleLocation, history);
    history.push("/");
  };

  const handleReject = () => {
    //set rejectedPermissions: true
    history.push("/");
  };
  return (
    <Container>
      <BoldPrompt>
        In order for us to give you accurate results, we need to know your
        location.
      </BoldPrompt>
      <SubText>
        Different areas have different regulations, so if you allow us to locate
        you, your results will be exceptionally helpful.
      </SubText>

      <BtnContainer>
        <Button onClick={handleAccept}>Opt In</Button>
        <BtnInvertedContainer>
          <Button inverted onClick={handleReject}>
            No Thanks
          </Button>
        </BtnInvertedContainer>
      </BtnContainer>
    </Container>
  );
};

export default PermissionPage;
