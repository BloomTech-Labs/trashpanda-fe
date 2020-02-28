import React from "react";
import HomePage from "../HomePage";
import { MockedProvider } from "@apollo/react-testing";
import { GET_CATEGORIES } from "../../App.js";
import {
  render,
  cleanup,
  waitForElement,
  getByText,
  fireEvent
} from "@testing-library/react";
import { mockCategoryList } from "./mock_data/mockOrganismState";

//useHistory is used in modules CategoryGrid and HomeSearchBar
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: jest.fn()
  })
}));

const mocksQuery = [
  {
    request: {
      query: GET_CATEGORIES
    },
    result: {
      data: {
        families: [
          {
            material_ids: [1, 2, 4],
            family_id: 1,
            description: "first family",
            family_type_id: 1,
            image_url: "google.com"
          },
          {
            material_ids: [3, 5, 7],
            family_id: 2,
            description: "second family",
            family_type_id: 2,
            image_url: "google.com"
          }
        ]
      }
    }
  }
];

describe("HomePage", () => {
  afterEach(cleanup);

  it("renders HomePage and GridCards based on description of mock Category List", async () => {
    const page = render(
      <MockedProvider mocks={mocksQuery} addTypename={false}>
        <HomePage />
      </MockedProvider>
    );
    await waitForElement(() => page.getByText(/first family/i));
    await waitForElement(() => page.getByText(/second family/i));
  });

  it("renders HomePage and input field with placeholder text 'enter search term'", async () => {
    const page = render(
      <MockedProvider mocks={mocksQuery} addTypename={false}>
        <HomePage />
      </MockedProvider>
    );
    await waitForElement(() => page.getByPlaceholderText(/enter search term/i));
  });

  //NO TEXT CHANGES ON FIRED EVENTS
});

//REMOVED
//categorylist={mockCategoryList} from HomePage component, we are no longer passing query results down from App through prop drilling, so here we have to mock the entire query and pass it to the MockProvider
