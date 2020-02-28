import React from "react";
import CategoryPage from "../CategoryPage";
import { MockedProvider } from "@apollo/react-testing";
import {
  render,
  cleanup,
  waitForElement,
  getByText
} from "@testing-library/react";
import { GET_CATEGORIES, GET_MATERIALS } from "../../App.js";
import { InMemoryCache } from "apollo-cache-inmemory";
import { act } from "react-dom/test-utils";
import { mockCategoryList, mockMaterials } from "./mock_data/mockOrganismState";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: jest.fn()
  }),
  useParams: () => ({
    categoryId: 1
  })
}));

const mocksCategoriesQuery = [
  {
    request: {
      query: GET_CATEGORIES
    },
    result: {
      data: {
        families: [
          {
            material_ids: [1],
            family_id: 1,
            description: "first family",
            family_type_id: 1,
            image_url: "https://i.imgur.com/Zeb0clO.png",
            __typename: "Family"
          }
        ]
      }
    }
  }
];

const mocksMaterialsQuery = [
  {
    request: {
      query: GET_MATERIALS
    },
    result: {
      data: {
        materials: [
          {
            // id: 1,
            description: "first material",
            material_id: 1,
            long_description: "the primary",
            // bin_trash: false,
            // bin_recycle: true,
            // bin_compost: true,
            // dropoff: "event",
            // pickup: "no",
            // notes: "The first mocked material",
            image_url: "https://i.imgur.com/Zeb0clO.png",
            __typename: "Material"
          },
          {
            //id: 2,
            description: "second material",
            material_id: 2,

            long_description: "the secondary",
            // bin_trash: false,
            // bin_recycle: false,
            // bin_compost: false,
            // dropoff: "event",
            // pickup: "no",
            // notes: "The second mocked material",
            image_url: "https://i.imgur.com/Zeb0clO.png",
            __typename: "Material"
          },
          {
            // id: 3,
            description: "third material",
            material_id: 3,

            long_description: "the teriary",
            // bin_trash: false,
            // bin_recycle: true,
            // bin_compost: true,
            // dropoff: "event",
            // pickup: "no",
            // notes: "The third mocked material",
            image_url: "https://i.imgur.com/Zeb0clO.png",
            __typename: "Material"
          },
          {
            // id: 4,
            description: "fourth material",
            material_id: 4,

            long_description: "the fourth",
            //bin_trash: false,
            //bin_recycle: false,
            // bin_compost: false,
            // dropoff: "event",
            // pickup: "no",
            //notes: "The fourth mocked material",
            image_url: "https://i.imgur.com/Zeb0clO.png",
            __typename: "Material"
          }
        ]
      }
    }
  }
];

describe("CategoryPage", () => {
  const cache = new InMemoryCache();

  afterEach(cleanup);

  it("renders CategoryPage and title based on description of mock Category 1(using params argument)", async () => {
    const page = render(
      <MockedProvider cache={cache} addTypename={false}>
        <CategoryPage categories={mockCategoryList} materials={mockMaterials} />
      </MockedProvider>
    );
    page.debug();
    await waitForElement(() => page.getByText(/first family/i));
  });

  it("renders CategoryPage and, after iterating over mocked catergory 1 material_ids, it renders grid cards with names of mocked material instances 1, 2 and 4", async () => {
    const page = render(
      <MockedProvider cache={cache} addTypename={false}>
        <CategoryPage categories={mockCategoryList} materials={mockMaterials} />
      </MockedProvider>
    );
    page.debug();
    await waitForElement(() => page.getByText(/first material/i));
    await waitForElement(() => page.getByText(/second material/i));
    await waitForElement(() => page.getByText(/fourth material/i));
  });
});

// WHY WE ARE PROP DRILLING CATEGORY PAGE
// To test if we were overloading our CategoryPage with rerenders, I changed our Category page back to accept props of materials and categories from the App file. Lifting them ensures that the queries are only being triggered once, so our tests pass in that case. Having the queries on the CategoryPage component  is causing and unknown amount of calls/triggers, but a lot more than 1. This seems like it would be a performance issue. I think the changes in state of one result/query may be triggering the other?
