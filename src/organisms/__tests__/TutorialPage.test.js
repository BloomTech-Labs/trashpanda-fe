import React from "react";
import TutorialPage from "../TutorialPage";
import { MockedProvider } from "@apollo/react-testing";
import {
  render,
  cleanup,
  waitForElement,
  getByText,
  fireEvent
} from "@testing-library/react";

const lightTheme = {
  titleText: "#000000",
  text: "#404040",
  body: "#FFFFFF",
  searchBackground: "#FFFFFF",
  searchText: "#737373",
  bottomNav: "#336b68",
  locationBorder: "#d9d9d9",
  border: "1px solid #404040",
  stepperColor: "rgba(51, 107, 104, 0.2)",
  trashManImg: ""
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe("TutorialPage", () => {
  afterEach(cleanup);

  it("renders TutorialPage", async () => {
    const page = render(
      <MockedProvider addTypename={false}>
        <TutorialPage theme={lightTheme} />
      </MockedProvider>
    );
    await waitForElement(() =>
      page.getByText(/Here to help you create better recycling habits./i)
    );
    await waitForElement(() => page.getByText(/Next/i));
  });

  it("fires next button", async () => {
    const page = render(
      <MockedProvider addTypename={false}>
        <TutorialPage theme={lightTheme} />
      </MockedProvider>
    );

    fireEvent.click(page.getByText(/Next/i));
    page.debug();

    expect(
      page.getByText(
        /Let us use your location to help you properly dispose of the item./i
      )
    ).toBeTruthy();
  });
});
