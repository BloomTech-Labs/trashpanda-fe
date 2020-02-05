import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import GridCard from "./GridCard";
import placeholderImg from "../images/category_placeholder.svg";

// import { useQuery } from "@apollo/react-hooks";
// import { gql } from "apollo-boost";

// const GET_CATEGORIES = gql`
//   query getAllFamilies {
//     families {
//       material_ids
//       family_id
//       description
//       family_type_id
//     }
//   }
// `;

const GridContainer = styled.div`
  display: grid;
  margin-top: 36px;
  width: 100%;
  gap: 26px 25px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
`;

const CategoryGrid = ({ categorylist }) => {
  // const { loading, error, data } = useQuery(GET_CATEGORIES);
  const history = useHistory();
  // useEffect(() => {
  //   if (data) setCategories(data.families);
  // }, [data]);

  // if (loading) return <h1>Loading</h1>;
  // if (error) return <h1>Error: {error}</h1>;

  // console.log("Category Data: ", data);

  const handleCategoryClick = id => {
    history.push(`/category/${id}`);
  };

  return (
    <GridContainer>
      {categorylist.map((category, key) => (
        <GridCard
          image={placeholderImg}
          name={category.description}
          key={key}
          onClick={() => handleCategoryClick(category.family_id)}
        />
      ))}
    </GridContainer>
  );
};

export default CategoryGrid;
