import React from "react";
import PermissionPage from "../PermissionPage";
import { MockedProvider } from "@apollo/react-testing";
import {
  render,
  cleanup,
  waitForElement,
  getByText,
  fireEvent
} from "@testing-library/react";

import {
  mockSetUserLocation,
  mockGetUserLocation
} from "./mock_data/mockStateFunctions";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe("PermissionPage", () => {
  afterEach(cleanup);

  it("renders PermissionPage and web copy for prompt, subtext and reject button", async () => {
    const page = render(
      <MockedProvider addTypename={false}>
        <PermissionPage
          handleLocation={mockSetUserLocation}
          getLocation={mockGetUserLocation}
        />
      </MockedProvider>
    );
    await waitForElement(() =>
      page.getByText(
        /In order for us to give you accurate results, we need to know your location./i
      )
    );

    await waitForElement(() =>
      page.getByText(
        /Different areas have different regulations, so if you allow us to locate you, your results will be exceptionally helpful./i
      )
    );
    await waitForElement(() => page.getByText(/Opt In/i));
    await waitForElement(() => page.getByText(/No Thanks/i));
  });

  it("fires Opt In button", async () => {
    const page = render(
      <MockedProvider addTypename={false}>
        <PermissionPage
          handleLocation={mockSetUserLocation}
          getLocation={mockGetUserLocation}
        />
      </MockedProvider>
    );
    fireEvent.click(page.getByText(/Opt In/i));
    expect(mockGetUserLocation).toHaveBeenCalledTimes(1);
  });

  //   it("fires No Thanks button", async () => {
  //     const page = render(
  //       <MockedProvider addTypename={false}>
  //         <PermissionPage
  //           handleLocation={mockSetUserLocation}
  //           getLocation={mockGetUserLocation}
  //         />
  //       </MockedProvider>
  //     );
  //     fireEvent.click(page.getByText(/No Thanks/i));
  //     expect().toHaveBeenCalledTimes(1);
  //   });
});
