import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Container = styled.div``;

const SubCategoryPage = () => {
  const { subCategoryId } = useParams();
  console.log("ID: ", subCategoryId);
  return <Container></Container>;
};

export default SubCategoryPage;
