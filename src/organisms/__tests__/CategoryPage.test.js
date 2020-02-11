import React from "react";
import CategoryPage from "../CategoryPage";
import { MockedProvider } from "@apollo/react-testing";
import {
  render,
  cleanup,
  waitForElement,
  getByText
} from "@testing-library/react";
import { mockCategoryList, mockMaterials } from "./mock_data/mockOrganismState";

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
    categoryId: 1
  })
}));

describe("CategoryPage", () => {
  afterEach(cleanup);

  it("renders CategoryPage and title based on description of mock Category 1", async () => {
    const page = render(
      <MockedProvider addTypename={false}>
        <CategoryPage
          categorylist={mockCategoryList}
          materiallist={mockMaterials}
        />
      </MockedProvider>
    );
  });
});
