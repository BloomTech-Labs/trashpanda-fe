import React from "react";
import MaterialPage, { GET_MATERIAL } from "../MaterialPage";
import { MockedProvider } from "@apollo/react-testing";
import {
  render,
  cleanup,
  waitForElement,
  getByText
} from "@testing-library/react";

const mocksQuery = [
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
          bin_recycle: false,
          bin_compost: true,
          dropoff: "event",
          pickup: "no",
          notes: "The first mocked material"
        }
      }
    }
  }
];

//the second argument of jest.mock must be an inline function
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: jest.fn()
  }),
  useParams: () => ({
    materialId: 1
  })
}));

jest.mock("../../molecules/Badge.jsx");

describe("MaterialPage", () => {
  afterEach(cleanup);

  it("renders MaterialPage without error and checks for the existence of an element with the text 'Locate Centers'", async () => {
    const page = render(
      <MockedProvider>
        <MaterialPage />
      </MockedProvider>
    );
    //some useful methods commented out below
    // await Promise.resolve();
    // page.debug();
    expect(page).toEqual(
      expect.objectContaining({
        baseElement: expect.anything()
      })
    );

    await waitForElement(() => page.getByText(/Locate Centers/i));
  });

  it("renders MaterialPage and checks that Badge component is being called/imported", async () => {
    const page = render(
      <MockedProvider mocks={mocksQuery} addTypename={false}>
        <MaterialPage />
      </MockedProvider>
    );

    await waitForElement(() => page.getByText(/some fake image/i));
  });

  it("renders MaterialPage and calls an Actual query that checks mock response against mock materials, then checks the page for an element that contains the text that would be rendered if that query was satisfied", async () => {
    const page = render(
      <MockedProvider mocks={mocksQuery} addTypename={false}>
        <MaterialPage />
      </MockedProvider>
    );

    await waitForElement(() => page.getByText(/The first mocked material/i));
  });
});
