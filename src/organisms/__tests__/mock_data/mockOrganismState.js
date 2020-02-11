const mockCategoryList = [
  {
    material_ids: [1, 2, 4],
    family_id: 1,
    description: "first family",
    family_type_id: 1
  },
  {
    material_ids: [3, 5, 7],
    family_id: 2,
    description: "second family",
    family_type_id: 2
  }
];

const mockMaterials = [
  {
    id: 1,
    material_id: 1,
    description: "first",
    long_description: "the primary",
    bin_trash: false,
    bin_recycle: true,
    bin_compost: true,
    dropoff: "event",
    pickup: "no",
    notes: "The first mocked material"
  },
  {
    id: 2,
    material_id: 2,
    description: "second",
    long_description: "the secondary",
    bin_trash: false,
    bin_recycle: false,
    bin_compost: false,
    dropoff: "event",
    pickup: "no",
    notes: "The second mocked material"
  },
  {
    id: 3,
    material_id: 3,
    description: "third",
    long_description: "the teriary",
    bin_trash: false,
    bin_recycle: true,
    bin_compost: true,
    dropoff: "event",
    pickup: "no",
    notes: "The third mocked material"
  },
  {
    id: 4,
    material_id: 4,
    description: "fourth",
    long_description: "the fourth",
    bin_trash: false,
    bin_recycle: false,
    bin_compost: false,
    dropoff: "event",
    pickup: "no",
    notes: "The fourth mocked material"
  },
  {
    id: 5,
    material_id: 5,
    description: "fifth",
    long_description: "the fifth",
    bin_trash: false,
    bin_recycle: true,
    bin_compost: true,
    dropoff: "event",
    pickup: "no",
    notes: "The fifth mocked material"
  },
  {
    id: 6,
    material_id: 6,
    description: "sixth",
    long_description: "the sixth",
    bin_trash: false,
    bin_recycle: false,
    bin_compost: false,
    dropoff: "event",
    pickup: "no",
    notes: "The sixth mocked material"
  },
  {
    id: 7,
    material_id: 7,
    description: "seventh",
    long_description: "the seventh",
    bin_trash: false,
    bin_recycle: true,
    bin_compost: true,
    dropoff: "event",
    pickup: "no",
    notes: "The seventh mocked material"
  },
  {
    id: 8,
    material_id: 8,
    description: "eigth",
    long_description: "the eigth",
    bin_trash: false,
    bin_recycle: false,
    bin_compost: false,
    dropoff: "event",
    pickup: "no",
    notes: "The eigth mocked material"
  }
];

module.exports = {
  mockCategoryList,
  mockMaterials
};
