import { MockedProvider } from "@apollo/react-testing";

import { GET_MATERIAL, MaterialPage } from "../MaterialPage";
import { render } from "@testing-library/react";

const mocksQuery = [
  {
    request: {
      query: GET_MATERIAL,
      variables: {
        materialId: 1
      }
    },
    response: {
      data: {
        material: mockMaterials[0]
      }
    }
  }
];

const mockMaterials = [
  {
    materialId: 1,
    description: "first",
    long_description: "teh primary",
    bin_trash: false,
    bin_recycle: true,
    bin_compost: true,
    dropoff: "event",
    pickup: "no",
    notes: "The first mocked material"
  },
  {
    materialId: 2,
    description: "second",
    long_description: "the secondary",
    bin_trash: false,
    bin_recycle: false,
    bin_compost: false,
    dropoff: "event",
    pickup: "no",
    notes: "The second mocked material"
  }
];

it("renders MaterialPage without error", () => {
  render.create(
    <MockedProvider mocks={mocksQuery}>
      <MaterialPage materials={mockMaterials} />
    </MockedProvider>
  );
});
