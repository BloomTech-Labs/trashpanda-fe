import React, { useState, useEffect, memo } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import GridCard from "../molecules/GridCard";
import placeholderImg from "../images/category_placeholder.png";

const Root = styled.div`
  padding-top: 20px;
`;

const HeaderTitle = styled.h2`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  text-align: center;

  color: ${({ theme }) => theme.titleText};

  margin: 0px 0px 39px 0px;
  padding: 0;
`;

const MaterialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 26px 22px;
  margin: 39px 13px;
  margin-bottom: 105px;
`;

const CategoryPage = ({ categories, materials }) => {
  const { categoryId } = useParams();
  const history = useHistory();

  const [currentFamily, setCurrentFamily] = useState();
  const [materialList, setMaterialList] = useState();
  const [plasticList, setPlasticList] = useState([]);

  useEffect(() => {
    if (categories && !categories.loading && categories.data) {
      const family = categories.data.families.find(
        family => parseInt(categoryId) === family.family_id
      );
      setCurrentFamily(family);
    }

    if (materials && !materials.loading && materials.data && currentFamily) {
      const familyMaterials = materials.data.materials
        .map(material => {
          if (
            currentFamily.material_ids.find(id => material.material_id === id)
          ) {
            return material;
          }
        })
        .filter(exists => exists);

      if (categoryId == 9) {
        setPlasticList([
          {
            title: "Plastic Bags",
            image_url: getImageURL(familyMaterials, 445),
            subCategoryId: 2
          },
          {
            title: "Plastic Bottles",
            image_url: getImageURL(familyMaterials, 60),
            // materialIds: [60,455,63,64,65,66,67]
            subCategoryId: 1
          },
          {
            title: "Plastic Caps",
            image_url: getImageURL(familyMaterials, 619),
            subCategoryId: 3
          },
          {
            title: "Plastic Clamshells",
            image_url: getImageURL(familyMaterials, 446),
            subCategoryId: 4
          },
          {
            title: "Plastic Cups",
            image_url: getImageURL(familyMaterials, 466),
            subCategoryId: 5
          },
          {
            title: "Plastic Film",
            image_url: getImageURL(familyMaterials, 447),
            subCategoryId: 6
          },
          {
            title: "Rigid Plastics",
            image_url: getImageURL(familyMaterials, 448),
            subCategoryId: 7
          }
        ]);

        //Remove overwhelming #'d plastic type material ids
        //Plastic bottles: 60, 455, 63, 64, 65, 66, 67
        //Plastic Bags: 445, 93, 456, 429 ,464, 470, 477
        //Plastic Clamshells: 446, 452, 465, 472,
        //Plastic Film: 447, 413, 457, 461, 467, 473, 478
        //Rigid plastics: 448, 454, 458, 463, 468, 475, 476,
        //Plastic cups: 466, 621, 471
        //Plastic caps: 619, 361
        setMaterialList(
          removeMaterials(familyMaterials, [
            //Remove plastic bottles
            60,
            449,
            455,
            63,
            64,
            65,
            66,
            67,
            //Remove Plastic Bags
            445,
            93,
            456,
            429,
            464,
            470,
            477,
            //Remove plastic caps
            619,
            361,
            //Remove Plastic clamshells
            446,
            452,
            465,
            472,
            //Remove Plastic film
            447,
            413,
            457,
            461,
            467,
            473,
            478,
            //Remove rigid plastics
            448,
            454,
            458,
            463,
            468,
            475,
            476,
            //Remove plastic cups
            466,
            621,
            471
          ])
        );
      } else {
        setMaterialList(familyMaterials);
      }
    }
  }, [categories, materials, currentFamily]);

  const onClick = materialId => {
    history.push(`/material/${materialId}`);
  };

  return (
    <Root>
      {currentFamily && <HeaderTitle>{currentFamily.description}</HeaderTitle>}
      <MaterialGrid>
        {plasticList &&
          plasticList.map((mat, key) => (
            <GridCard
              image={mat.image_url.length > 0 ? mat.image_url : placeholderImg}
              name={mat.title}
              key={key}
              onClick={() => history.push(`/subcategory/${mat.subCategoryId}`)}
            />
          ))}
        {materialList &&
          materialList.map((mat, key) => (
            <GridCard
              image={mat.image_url.length > 0 ? mat.image_url : placeholderImg}
              name={mat.description}
              key={key}
              onClick={() => onClick(mat.material_id)}
            />
          ))}
      </MaterialGrid>
    </Root>
  );
};

function getImageURL(materialList, materialId) {
  const found = materialList.find(material => {
    return material.material_id === materialId;
  });
  return found ? found.image_url : "";
}

function removeMaterials(materialList, idsToRemove) {
  return materialList.filter(material => {
    if (idsToRemove.includes(material.material_id)) {
    }
    return !idsToRemove.includes(material.material_id);
  });
}

export default CategoryPage;

//GRAVEYARD

// useEffect(() => {
//   // update cache on reload
//   categories.refetch();
//   materials.refetch();
// }, []);
