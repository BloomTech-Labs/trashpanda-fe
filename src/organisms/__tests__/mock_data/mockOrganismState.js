const mockCategoryList = {
  data: {
    families: [
      {
        material_ids: [1, 2, 4],
        family_id: 1,
        description: "first family",
        family_type_id: 1,
        image_url: "google.com",
        __typeName: "Family"
      }
      // {
      //   material_ids: [3, 5, 7],
      //   family_id: 2,
      //   description: "second family",
      //   family_type_id: 2,
      //   image_url: "google.com",
      //   __typeName: "Family"
      // }
    ]
  },
  loading: false
};

const mockMaterials = {
  data: {
    materials: [
      {
        id: 1,
        material_id: 1,
        description: "first material",
        long_description: "the primary",
        bin_trash: false,
        bin_recycle: true,
        bin_compost: true,
        dropoff: "event",
        pickup: "no",
        notes: "The first mocked material",
        image_url: "https://i.imgur.com/Zeb0clO.png",
        __typename: "Material"
      },
      {
        id: 2,
        material_id: 2,
        description: "second material",
        long_description: "the secondary",
        bin_trash: false,
        bin_recycle: false,
        bin_compost: false,
        dropoff: "event",
        pickup: "no",
        notes: "The second mocked material",
        image_url: "https://i.imgur.com/Zeb0clO.png",
        __typename: "Material"
      },
      {
        id: 3,
        material_id: 3,
        description: "third material",
        long_description: "the teriary",
        bin_trash: false,
        bin_recycle: true,
        bin_compost: true,
        dropoff: "event",
        pickup: "no",
        notes: "The third mocked material",
        image_url: "https://i.imgur.com/Zeb0clO.png",
        __typename: "Material"
      },
      {
        id: 4,
        material_id: 4,
        description: "fourth material",
        long_description: "the fourth",
        bin_trash: false,
        bin_recycle: false,
        bin_compost: false,
        dropoff: "event",
        pickup: "no",
        notes: "The fourth mocked material",
        image_url: "https://i.imgur.com/Zeb0clO.png",
        __typename: "Material"
      }
    ]
  },
  loading: false
};

const mockUserLocation = {
  latitude: 36.004,
  longitude: -45.005,
  altitude: "Doesn't Matter",
  accuracy: "Doesn't Matter",
  altitudeAccuracy: "Doesn't Matter",
  heading: "Doesn't Matter",
  speed: "Doesn't Matter"
};

module.exports = {
  mockCategoryList,
  mockMaterials,
  mockUserLocation
};
