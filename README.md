[![Maintainability](https://api.codeclimate.com/v1/badges/dd50a720d4e42bf1b47d/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/trashpanda-fe/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/dd50a720d4e42bf1b47d/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/trashpanda-fe/test_coverage)

# Trash Panda

You can find the deployed project at [thetrashpanda.com](https://thetrashpanda.com/).

## Contributors

|                                          [Mark Artishuk](https://github.com/artish1)                                           |                                         [Mark Halls](https://github.com/mark-halls)                                         |                                     [Carlo Jose Lucido](https://github.com/CJLucido)                                      |                                             [Colin Bazzano](https://github.com/colinbazzano)                                             |     |
| :----------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: | :-: |
|    [<img src="https://ca.slack-edge.com/T4JUEB3ME-UMQM2AV7Z-42f02200cf6b-512" width = "200" />](https://github.com/artish1)    | [<img src="https://ca.slack-edge.com/T4JUEB3ME-UMNR0BFPS-d232556a3fcc-512" width = "200" />](https://github.com/mark-halls) | [<img src="https://ca.slack-edge.com/T4JUEB3ME-UMQM1SSDV-1bed09a398b6-512" width = "200" />](https://github.com/CJLucido) |      [<img src="https://ca.slack-edge.com/T4JUEB3ME-UMNQZUF7S-3304d02efae8-512" width = "200" />](https://github.com/colinbazzano)       |     |
|                      [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/artish1)                      |                   [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/mark-halls)                   |                  [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/CJLucideo)                   |                        [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/colinbazzano)                         |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/mark-artishuk/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/mark-halls/) |       [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/cjlucido)       | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/colin-bazzano-6a6250114/) |

<br>
<br>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![graphql](https://img.shields.io/badge/graphql-14.6.0-ff69b4)
![React](https://img.shields.io/badge/React-16.12.0-blue)
![Apollo](https://img.shields.io/badge/Apollo-2.6-9cf)
![styled-components](https://img.shields.io/badge/styled--components-v5.0.0-ff69b4)
[![Netlify Status](https://api.netlify.com/api/v1/badges/b5c4db1c-b10d-42c3-b157-3746edd9e81d/deploy-status)](https://deploy-preview-165--kind-ritchie-d137bc.netlify.com/intro)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Project Overview

[Trello Board](https://github.com/Lambda-School-Labs/trashpanda-fe/projects/1)

[Product Canvas](https://www.notion.so/Vision-Problem-Objectives-ee345de932ee49a4aae793dd89a6bcff)

[UX Design files](https://www.figma.com/file/SmslveGClPv8Rk5gTKsAOZ/Trash-Panda%2C-Lynn-B.-Kendra-M.?node-id=122%3A2)

Trash Panda is an app that helps you to recycle better. You may search through a list of categories, enter in a material to our search bar, or (soon) use your camera to scan and item to discover how to properly dispose of your material! A lot of things end up in garbage bags sent off to the landfill when they might have a better way of being disposed. With Trash Panda, you will become wiser at disposing items and be better to our planet!

### Key Features

- Ability to navigate through categories to select your material and receive it's proper disposal method.
- Ability to search for your exact item and learn it's proper disposal method.
- Ability to use your device's camera to find what your item is, then proper disposal.
- Using any method above, then find a location nearby that may accept item (if applicable).
- Discover name, hours, phone, and address of location in which your item may be brought to for disposal.

## Tech Stack

### Front end built using:

#### [React](https://reactjs.org/)

- React in tandem with the other libraries below help achieve PWA application standards.
- Ability to make our app work as a Single Page Application.
- React helps to make clean and fast applications for our users.

#### [Apollo Client](https://www.apollographql.com/docs/react/)

- Apollo Client helps achieve PWA application standards.
- Apollo Client with GraphQL makes for easy access to the needed data from our backend/Earth911 API.
- Apollo Hooks alongside React hooks makes for quality and clean code.

#### [GraphQL](https://graphql.org/)

- GraphQL plays a large part towards achieving PWA application standards.
- GraphQL's tidy data structuring makes accessing data very easy and clean.
- GraphQL allows you to only grab the information you need.

#### [styled-components](https://styled-components.com/)

- styled-components makes for easy CSS-in-JS.
- Clever naming of components makes for much easier reading.
- Flexibility with styling to make our app look the best it can.

#### Front end deployed to [Trash Panda](https://www.thetrashpanda.com)

#### [Back end](https://github.com/Lambda-School-Labs/trashpanda-be) built using:

#### Apollo Server

- Apollo Server makes for a great backend when paired with GraphQL
- Ability to use such tools as Apollo Dev Tools for quick testing of our backend
- Great structuring of requests using their typeDefs.

#### GraphQL

- Amazing structure building for the backend.
- Tools such as graphiql that allow us to quickly test our requests to ensure they return the proper data.
- Creates very easy requests that the front end can use to display data.

#### Knex

- Used to tie together our backend with a config file.
- Allows us to use PostgreSQL for our deployed application.
- Easy to use migration and seed system.

#### Parcel

- Used as a bundler in replace of webpack
- Doesn't use a config file to allow for easy setup

# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    * earth911_secret - Used to pass along an API Key as supplied by Earth911.
    SKIP_PREFLIGHT_CHECK - used to skip any preflight checks for our application. Set to true.
                         |

# Testing

#### @apollo/react-testing

To test our application, we used the react testing suite from apollo. This allows us to mock a provider and test our Graphql/Apollo functionality within our React app.

#### @testing-library/react

From the great mind of Kent C. Dodds, is react testing library. A brilliant way to test your React components in a way that allows for proper testing coverage.

#### Jest

Jest is an industry standard way of testing. We implemented it along with the aforementioned testing dependencies. We did **not** use express with our application.

# Installation Instructions

`npm i` - used to install all dependencies.
<br>
`npm run startDev` - used to get the application running
<br>
`npm run test` - used to begin testing of the front end.

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/Lambda-School-Labs/trashpanda-be) for details on the backend of our project.
