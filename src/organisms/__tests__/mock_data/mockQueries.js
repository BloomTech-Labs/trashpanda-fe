import { GET_MATERIAL } from "../../MaterialPage";

const mockMaterialQuery = [
  {
    request: {
      query: GET_MATERIAL,
      variables: {
        materialId: 1
      }
    },
    result: {
      data: {
        material: {
          material_id: 1,
          description: "first",
          long_description: "teh primary",
          bin_trash: false,
          bin_recycle: true,
          bin_compost: true,
          dropoff: "event",
          pickup: "no",
          notes: "The first mocked material"
        }
      }
    }
  }
];

module.exports = {
  mockMaterialQuery
};
