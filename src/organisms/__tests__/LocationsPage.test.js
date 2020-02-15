import React from "react";
import LocationsPage, {
  GET_LOCATIONS,
  GET_POSTAL,
  GET_ZIP
} from "../LocationsPage";
import { MockedProvider } from "@apollo/react-testing";
import {
  render,
  cleanup,
  waitForElement,
  getByText
} from "@testing-library/react";

import { mockUserLocation } from "./mock_data/mockOrganismState";

//mockQueries should be moved to separate file that was made in not yet merged Pull Request
const mocksQueryLocations = [
  {
    request: {
      query: GET_LOCATIONS,
      variables: {
        materialId: 1,
        latitude: 36.004,
        longitude: -45.005
      }
    },
    result: {
      data: {
        locations: {
          description: "one fine place",
          address: "8 Sideways Cirle",
          full_address: "8 Sideways Cirle, Infinity, Stateless",
          hours: "none",
          phone: "tic",
          url: "azrl"
        }
      }
    }
  }
];

const mocksQueryPostal = [
  {
    request: {
      query: GET_POSTAL,
      variables: {
        postal_code: 10987,
        country: "US"
      }
    },
    result: {
      data: {
        locations: {
          postal_code: "10987",
          longitude: -24.097,
          latitude: 36.908
        }
      }
    }
  }
];

const mocksQueryZip = [
  {
    request: {
      query: GET_ZIP,
      variables: {
        latitude: "36.004", //toString on component
        longitude: "-45.005"
      }
    },
    result: {
      data: {
        locations: {
          //need explanation about the getZip field being called in the useEffect - throwing warning about it not being present on this mock query
          postal_code: "33333"
        }
      }
    }
  }
];

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: jest.fn()
  }),
  useParams: () => ({
    materialId: 1 //NEED
  })
}));

describe("LocationsPage", () => {
  afterEach(cleanup);

  it("renders LocationsPage and blurb, and queries are used without error", async () => {
    const page = render(
      <MockedProvider
        mocks={(mocksQueryLocations, mocksQueryPostal, mocksQueryZip)}
        addTypename={false}
      >
        <LocationsPage location={mockUserLocation} />
      </MockedProvider>
    );
    page.debug();
    await waitForElement(() => page.getByText(/Where can I bring this?/i));
  });
});
