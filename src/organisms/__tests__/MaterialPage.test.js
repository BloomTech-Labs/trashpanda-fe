import React from "react";
import MaterialPage, { GET_MATERIAL } from "../MaterialPage";
import { MockedProvider } from "@apollo/react-testing";
import { render, cleanup } from "@testing-library/react";
// import renderer from "react-test-renderer"; //renderer.create does the same error as render
// import wait from "waait";
// import { useQuery } from "@apollo/react-hooks";

// const mockMaterials = [
//   {
//     materialId: 1,
//     description: "first",
//     long_description: "teh primary",
//     bin_trash: false,
//     bin_recycle: true,
//     bin_compost: true,
//     dropoff: "event",
//     pickup: "no",
//     notes: "The first mocked material"
//   },
//   {
//     materialId: 2,
//     description: "second",
//     long_description: "the secondary",
//     bin_trash: false,
//     bin_recycle: false,
//     bin_compost: false,
//     dropoff: "event",
//     pickup: "no",
//     notes: "The second mocked material"
//   }
// ];

// const mocksQuery = [
//   {
//     request: {
//       query: GET_MATERIAL,
//       variables: {
//         materialId: 1
//       }
//     },
//     response: {
//       data: {
//         material: mockMaterials[0]
//       }
//     }
//   }
// ];

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    replace: jest.fn(),
    length: 0,
    location: {
      pathname: "",
      search: "",
      state: "",
      hash: ""
    },
    action: jest.fn(),
    push: jest.fn(),
    go: jest.fn(),
    goBack: jest.fn(),
    goForward: jest.fn(),
    block: jest.fn(),
    listen: jest.fn(),
    createHref: jest.fn()
  }),
  useParams: () => ({
    materialId: 1
  })
}));

// jest.mock("styled-components", () => ({
//   div: () => jest.fn(),
//   h2: () => jest.fn(),
//   h3: () => jest.fn(),
//   keyframes: jest.fn(),
//   img: () => jest.fn(),
//   p: () => jest.fn(),
//   button: () => jest.fn()
// }));

// jest.mock("@apollo/react-hooks", () => ({
//   ...jest.requireActual("@apollo/react-hooks"),
//   useQuery: () => mocksQuery[0].response
// }));

// jest.mock("react", () => ({
//   ...jest.requireActual("react")
//   // useState: () => ({
//   //   material: {
//   //     description: mockMaterials[0].description,
//   //     long_description: mockMaterials[0].long_description,
//   //     bin_trash: mockMaterials[0].bin_trash,
//   //     bin_recycle: mockMaterials[0].bin_recycle,
//   //     bin_compost: mockMaterials[0].bin_compost,
//   //     dropoff: mockMaterials[0].dropoff,
//   //     pickup: mockMaterials[0].pickup,
//   //     notes: mockMaterials[0].notes
//   //   }
//   // }),
//   // useEffect: () => jest.fn()
// }));

describe("MaterialPage", () => {
  afterEach(cleanup);

  it("renders MaterialPage without error", async () => {
    // const feature = () => {
    const { debug } = render(
      <MockedProvider>
        <MaterialPage />
      </MockedProvider>
    );
    // };
    debug();
    // expect(getByText("first")).toBeInTheDocument();
    // console.log(feature());
    await Promise.resolve();
    debug();
  });
});

//mocks={mocksQuery} addTypename={false}
// materials={mockMaterials}
