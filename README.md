<p align="center">
    <img src="https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png" height="128">
    <h1 align="center">HZN <a href="https://nextjs.org">Next.JS</a> Boilerplate</h1>
</p>

<p align="center">
  <a aria-label="Next version" href="https://www.npmjs.com/package/next">
    <img alt="" src="https://img.shields.io/badge/Next%20Version-v11.1.2-brightgreen">
  </a>
  <a aria-label="Dev Dependencies: up to date" href="#">
    <img alt="" src="https://img.shields.io/badge/devDependencies-up%20to%20date-brightgreen">
  </a>
  <a aria-label="Dependencies: up to date" href="#">
    <img alt="" src="https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen">
  </a>
</p>

This structure based on [next-boilerplate](https://github.com/pankod/next-boilerplate).
<br/>
Enhancements:

-   Added Material UI and removed Styled Component.
-   Added Cypress as e2e testing framework.
-   Added Atomic design structure (Atoms, Molecules, etc.).
-   Added Next JS internationalization.
-   Added Redux Persist.
-   Added Modules in Interfaces directory `Interfaces/Modules`.
-   Added Internationalization config by NextJS Internationalization and `next-i18next`, currently support [en, id]. example `http://localhost/id` or `http://localhost/en`. The default value is en.
-   Moved `_app/index.tsx`, `_document/index.tsx`, `_error/index.tsx`, `404/index.tsx` from folder to `_app.tsx`.
-   Updated all library to latest update (Next.JS v9 to v11, storybook, redux, etc).
-   Updated definition structure in service layer from multiple definition to single definition, example: `Auth.d.ts`.
-   Updated bundle analyzer setup to the latest way.
-   Removed Express JS.
-   Removed CLI Pankod.

## About

Next.js is a minimalistic React framework that runs on the browser and the server. It offers developers an easy way to get started, and as it uses React.js for templating, it's also a straightforward way for developers with React experience to get productive quickly.

The advantage of this approach is to be able to create rich user experiences in a uniform way, without compromising SEO (Search Engine Optimisation) factors that are key to good ranking on Google and other search engines.

This boilerplate makes it easier to get up and running with a well-structured Next.js and TypeScript application.

<br/>

## Features

this project provides a lot of features out of the box. Here's an overview of the included components and tools.

-   **Next.js** - Minimalistic framework for server-rendered React applications.
-   **Typescript** - Superset of JavaScript which primarily provides optional static typing, classes and interfaces.
-   **Redux** - A predictable state container for JavaScript apps with Redux Thunk and Redux Persist.
-   **Material UI** - React components for faster and easier web development.
-   **Docker** - A tool designed to make it easier to create, deploy, and run applications by using containers.
-   **Babel** - The compiler for next generation JavaScript.
-   **ESLint** - The pluggable linting utility.
-   **Bundler Analyzer** - Visualize the size of webpack output files with an interactive zoomable treemap.
-   **Jest** - Javascript testing framework , created by developers who created React.
-   **React Testing Library** - Simple and complete React DOM testing utilities that encourage good testing practices.
-   **Cypress** - Javascript automation testing framework.
-   **next-runtime-dotenv** - Expose environment variables to the runtime config of Next.js
-   **next-i18next** - An internationalization-framework which provides a function that takes a key, some options, and returns the value for the current language. Helps you to add language translation support to your app.
-   **Storybook** - An open source tool for developing UI components in isolation for React.
    <br/>

## Setup and Usages

Run this script `npm install` or `yarn install` and then to run this project `npm run start:dev` or `yarn run start:dev`.

This project provides somes scripts:

-   **npm run start** - Running this project in production environment.
-   **npm run start:dev** - Running this project in development environment.
-   **npm run start:doc** - Running this project as component documentation.
-   **npm run test:unit** - Running unit testing with Jest.
-   **npm run test:e2e** - Running end to end testing with Cypress.
-   **npm run start:analyze** - Analyzing existing bundle by bundle size visualization in the terminal.
    <br/>

Recommended Visual Studio Extensions:

-   Jest
-   Jest Snippets
-   GitLens - Git supercharge
-   Prettier
-   JavaScript (ES6) code snippets
-   JavaScript and Typescript Nightly
-   ESLint
-   One Dar Pro (theme)
-   Material Icon Theme

## Environment

| Key                 | Description                                              | Example value           |
| ------------------- | -------------------------------------------------------- | ----------------------- |
| NEXT_PUBLIC_API_URL | API url                                                  | http://192.168.1.3:8080 |
| BUNDLE_ANALYZE      | Determine to open bundle visualization in browser or not | true / false            |

## Folder Structure

| Folder             | Description                    |
| ------------------ | ------------------------------ |
| .storybook         | Storybook configuration        |
| coverage           | Jest coverage result           |
| cypress            | End to end testing folder      |
| test/jest.setup.ts | Jest setup before the test run |
| ...                | ...                            |

## Rules

### Generals

-   The imported library should be pyramid sorted and also grouped by:
    1. External library
    2. Component
    3. Redux
    4. Util/Helper
    5. Interface

### Components

-   Component should be writed in functional component
-   A function in functional component should be wrapped by `useCallback` to prevent a useless instantiation
-   A function has expensive calculation should be wrapped by `useMemo` to prevent a useless calculation
-   Functional component should be exported with `React.memo` to prevent a useless rendering
-   the interface should exist in a functional component to register incoming props.
-   Every component should have snapshot testing
-   Every new component shoud have property data-testid with prefix typescript validation, example: `data-testid=button-login`
