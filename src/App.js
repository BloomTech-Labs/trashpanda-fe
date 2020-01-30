import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./organisms/HomePage";
import CategoryPage from "./organisms/CategoryPage";
import { Switch, Route } from "react-router-dom";
import NavBar from "./molecules/NavBar";
import MaterialPage from "./organisms/MaterialPage";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_CATEGORIES = gql`
  query getAllFamilies {
    families {
      material_ids
      family_id
      description
      family_type_id
    }
  }
`;

const GET_MATERIALS = gql`
  query getAllMaterials {
    materials {
      description
      material_id
      long_description
    }
  }
`;

const App = () => {
  const [categories, setCategories] = useState([]);
  const [materials, setMaterials] = useState([]);
  const cat = useQuery(GET_CATEGORIES);
  const mat = useQuery(GET_MATERIALS);

  useEffect(() => {
    if (cat.data) setCategories(cat.data.families);
    console.log("Data Cat: ", cat.data);
  }, [cat.data]);

  useEffect(() => {
    if (mat.data) setMaterials(mat.data.materials);

    console.log("Data Mat: ", mat.data);
  }, [mat.data]);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage categorylist={categories} />
        </Route>
        <Route exact path="/category/:id">
          <CategoryPage categorylist={categories} materiallist={materials} />
        </Route>
        <Route exact path="/material/:materialId">
          <MaterialPage materials={materials} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
