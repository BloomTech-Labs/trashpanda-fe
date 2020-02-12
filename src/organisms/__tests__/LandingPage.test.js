import React from "react";
import LandingPage from "../LandingPage";
import { MockedProvider } from "@apollo/react-testing";
import {
  render,
  cleanup,
  waitForElement,
  getByText,
  fireEvent
} from "@testing-library/react";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe("LandingPage", () => {
  afterEach(cleanup);

  it("renders LandingPage and checks for title, subtitle, paragraph text, and button", async () => {
    const page = render(
      <MockedProvider addTypename={false}>
        <LandingPage />
      </MockedProvider>
    );
    await waitForElement(() => page.getByText(/Trash Panda/i));
    await waitForElement(() =>
      page.getByText(
        /is here to help you create and maintain better recycling habits./i
      )
    );
    await waitForElement(() =>
      page.getByText(
        /Using information you give us, we’ll help you identify what the item is, if it’s recyclable, and where you can recycle it in your neighborhood./i
      )
    );
    await waitForElement(() => page.getByText(/Get Started/i));
  });

  //   it("clicks the button and checks for function call", async () => {
  //     const page = render(
  //       <MockedProvider addTypename={false}>
  //         <LandingPage />
  //       </MockedProvider>
  //     );
  //     fireEvent.click(page.getByText(/Get Started/i));
  //   });
});
