import React from "react";
import HomePage from "../HomePage";
import { MockedProvider } from "@apollo/react-testing";
import {
  render,
  cleanup,
  waitForElement,
  getByText,
  fireEvent
} from "@testing-library/react";
import { mockCategoryList } from "./mock_data/mockOrganismState";

// import reactRouterDOM from "react-router-dom";
// import CategoryGrid from "../../molecules/CategoryGrid";

//useHistory is used in modules CategoryGrid and HomeSearchBar
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe("HomePage", () => {
  afterEach(cleanup);

  it("renders HomePage and GridCards based on description of mock Category List", async () => {
    const page = render(
      <MockedProvider addTypename={false}>
        <HomePage categorylist={mockCategoryList} />
      </MockedProvider>
    );
    await waitForElement(() => page.getByText(/first family/i));
    await waitForElement(() => page.getByText(/second family/i));
  });

  it("renders HomePage and input field with placeholder text 'enter search term'", async () => {
    const page = render(
      <MockedProvider addTypename={false}>
        <HomePage categorylist={mockCategoryList} />
      </MockedProvider>
    );
    await waitForElement(() => page.getByPlaceholderText(/enter search term/i));
  });

  //   it("fires handleCategoryClick function by clicking a GridCard", async () => {
  //     const page = render(
  //       <MockedProvider addTypename={false}>
  //         <HomePage categorylist={mockCategoryList} />
  //       </MockedProvider>
  //     );
  //     fireEvent.click(page.getByText(/first family/));

  //     expect().toHaveBeenCalledTimes( 1);
  //   });
});
