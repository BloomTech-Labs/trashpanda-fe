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

  it("renders CategoryPage and title based on description of mock Category 1(using params argument)", async () => {
    const page = render(
      <MockedProvider addTypename={false}>
        <CategoryPage
          categorylist={mockCategoryList}
          materiallist={mockMaterials}
        />
      </MockedProvider>
    );
    await waitForElement(() => page.getByText(/first family/i));
  });

  it("renders CategoryPage and, after iterating over mocked catergory 1 material_ids, it renders grid cards with names of mocked material instances 1, 2 and 4", async () => {
    const page = render(
      <MockedProvider addTypename={false}>
        <CategoryPage
          categorylist={mockCategoryList}
          materiallist={mockMaterials}
        />
      </MockedProvider>
    );
    await waitForElement(() => page.getByText(/first material/i));
    await waitForElement(() => page.getByText(/second material/i));
    await waitForElement(() => page.getByText(/fourth material/i));
  });
});
