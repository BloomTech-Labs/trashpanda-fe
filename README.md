[![Maintainability](https://api.codeclimate.com/v1/badges/dd50a720d4e42bf1b47d/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/trashpanda-fe/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/dd50a720d4e42bf1b47d/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/trashpanda-fe/test_coverage)

🚫 Note: All lines that start with 🚫 are instructions and should be deleted before this is posted to your portfolio. This is intended to be a guideline, feel free to add your own flare to it.

🚫 The numbers 1️⃣ through 5️⃣ next to each item represent the week that part of the docs needs to be comepleted by. Make sure to delete the numbers by the end of Labs.

🚫 Each student has a required minimum number of meaningful PRs each week per the rubric. Contributing to docs does NOT count as a PR to meet your weekly requirements.

# Trash Panda

You can find the deployed project at [thetrashpanda.com](https://thetrashpanda.com/).

## Contributors

|                                          [Mark Artishuk](https://github.com/artish1)                                           |                                         [Mark Halls](https://github.com/mark-halls)                                         |                                     [Carlo Jose Lucido](https://github.com/CJLucido)                                      |                                             [Colin Bazzano](https://github.com/colinbazzano)                                             |     |
| :----------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: | :-: |
|    [<img src="https://ca.slack-edge.com/T4JUEB3ME-UMQM2AV7Z-42f02200cf6b-512" width = "200" />](https://github.com/artish1)    | [<img src="https://ca.slack-edge.com/T4JUEB3ME-UMNR0BFPS-d232556a3fcc-512" width = "200" />](https://github.com/mark-halls) | [<img src="https://ca.slack-edge.com/T4JUEB3ME-UMQM1SSDV-1bed09a398b6-512" width = "200" />](https://github.com/CJLucido) |      [<img src="https://ca.slack-edge.com/T4JUEB3ME-UMNQZUF7S-3304d02efae8-512" width = "200" />](https://github.com/colinbazzano)       |     |
|                      [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/artish1)                      |                   [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/mark-halls)                   |                  [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/CJLucideo)                   |                        [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/colinbazzano)                         |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/mark-artishuk/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/mark-halls/) |       [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/)       | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/colin-bazzano-6a6250114/) |

<br>
<br>

🚫 Optional examples of using images with links for your tech stack, make sure to change these to fit your project

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/React-16.12.0-blue)
![Typescript](https://img.shields.io/npm/types/typescript.svg?style=flat)
[![Netlify Status](https://api.netlify.com/api/v1/badges/b5c4db1c-b10d-42c3-b157-3746edd9e81d/deploy-status)](netlify link goes in these parenthesis)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

🚫 more info on using badges [here](https://github.com/badges/shields)

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

#### Front end deployed to `Netlify`

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

# APIs

## Authentication API here

🚫Replace text below with a description of the API

Water's like me. It's laaazy ... Boy, it always looks for the easiest way to do things A little happy sunlight shining through there. Let all these little things happen. Don't fight them. Learn to use them. Even the worst thing we can do here is good.

## Payment API here

🚫Replace text below with a description of the API

This is the way you take out your flustrations. Get away from those little Christmas tree things we used to make in school. Isn't it fantastic that you can change your mind and create all these happy things? Everything's not great in life, but we can still find beauty in it.

## Misc API here

🚫Replace text below with a description of the API

You can do anything your heart can imagine. In life you need colors. This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so. I'm sort of a softy, I couldn't shoot Bambi except with a camera. Trees get lonely too, so we'll give him a little friend. We'll lay all these little funky little things in there.

## Misc API here

🚫Replace text below with a description of the API

When you do it your way you can go anywhere you choose. Let your heart take you to wherever you want to be. If I paint something, I don't want to have to explain what it is. A tree needs to be your friend if you're going to paint him. That's a son of a gun of a cloud. Even the worst thing we can do here is good.

## Misc API here

🚫Replace text below with a description of the API

Volunteering your time; it pays you and your whole community fantastic dividends. Maybe there's a happy little waterfall happening over here. You can spend all day playing with mountains. We don't have to be committed. We are just playing here. You have freedom here. The only guide is your heart. It's cold, but it's beautiful.

# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

🚫These are just examples, replace them with the specifics for your app

    * earth911_secret - Used to pass along an API Key as supplied by Earth911.

# 5️⃣ Content Licenses

🚫For all content - images, icons, etc, use this table to document permission of use. Remove the two placeholders and add you content to this table

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| doodles.png    | Nicole Bennett   | [Creative Commons](https://www.toptal.com/designers/subtlepatterns/doodles/) |
| rings.svg      | Sam Herbert      | [MIT](https://github.com/SamHerbert/SVG-Loaders)                             |

# Testing

# Installation Instructions

`npm i` - used to install all dependencies.
<br>
`npm run start` - used to get the application running
<br>
`npm run test` - used to begin testing of the front end.

## Other Scripts

🚫replace these examples with your own

    * typecheck - runs the TypeScript compiler
    * build - creates a build of the application
    * start - starts the production server after a build is created
    * test - runs tests in **tests** directory \* eject - copy the configuration files and dependencies into the project so you have full control over them

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

See [Backend Documentation](🚫*link to your backend readme here*) for details on the backend of our project.
