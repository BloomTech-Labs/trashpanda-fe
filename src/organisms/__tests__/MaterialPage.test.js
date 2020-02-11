import React from "react";
import MaterialPage from "../MaterialPage";
import { MockedProvider } from "@apollo/react-testing";
import {
  render,
  cleanup,
  waitForElement,
  getByText
} from "@testing-library/react";

import { mockMaterialQuery } from "./mock_data/mockQueries";

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

  it("renders MaterialPage and checks for the existence of an element with the text 'Off-Site Recycling'", async () => {
    const page = render(
      <MockedProvider mocks={mockMaterialQuery} addTypename={false}>
        <MaterialPage />
      </MockedProvider>
    );

    await waitForElement(() => page.getByText(/Off-Site Recycle/i));
  });

  it("renders MaterialPage and calls an Actual query that checks mock response against mock materials, then checks the page for an element that contains the text that would be rendered if that query was satisfied", async () => {
    const page = render(
      <MockedProvider mocks={mockMaterialQuery} addTypename={false}>
        <MaterialPage />
      </MockedProvider>
    );

    await waitForElement(() => page.getByText(/The first mocked material/i));
  });
});
