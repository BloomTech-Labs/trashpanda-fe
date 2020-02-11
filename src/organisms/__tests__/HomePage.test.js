import React from "react";
import HomePage from "../HomePage";
import { MockedProvider } from "@apollo/react-testing";
import {
  render,
  cleanup,
  waitForElement,
  getByText
} from "@testing-library/react";
import { mockCategoryList } from "./mock_data/mockOrganismState";

//useHistory is used in modules CategoryGrid and HomeSearchBar
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe("HomePage", () => {
  afterEach(cleanup);

  it("renders HomePage and title based on description of mock Category 1(using params argument)", async () => {
    const page = render(
      <MockedProvider addTypename={false}>
        <HomePage categorylist={mockCategoryList} />
      </MockedProvider>
    );
    await waitForElement(() => page.getByText(/first family/i));
  });
});
