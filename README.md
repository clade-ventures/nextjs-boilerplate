<p align="center">
    <img src="https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png" height="128">
    <img src="https://image.flaticon.com/icons/png/512/919/919832.png" height="128">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWLBe-VaJIYEbmTPrm1XyFy35MInioRpbpKK48hmPbj-m8TCYEG_GSIUZZIpXNuTqG-U&usqp=CAU" height="128">
    <h1 align="center"><a href="https://nextjs.org">Next.JS</a> Boilerplate with Typescript and Redux Toolkit</h1>
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

A Next.JS Boilerplate in Typescript syntax with important libraries. This structure based on [next-boilerplate](https://github.com/pankod/next-boilerplate).
<br/>
Enhancements:

- Added Material UI and removed Styled Component.
- Added Cypress as e2e testing framework.
- Added Atomic design structure (Atoms, Molecules, etc.).
- Added Redux Toolkit (createSlice, createApi / RTK Query) and Redux Persist.
- Added Internationalization config by Next.JS Internationalization and `next-i18next`, currently support [en, id]. example `http://localhost/id` or `http://localhost/en`. The default value is en.
- Added form management with `react-hook-form` and `yup` library.
- Moved `_app/index.tsx`, `_document/index.tsx`, `_error/index.tsx`, `404/index.tsx` from folder to `_app.tsx`.
- Updated all library to latest update (Next.JS v9 to v11, storybook, redux, etc).
- Updated definition structure in service layer from multiple definition to single definition, example: `Auth.d.ts`.
- Updated bundle analyzer setup to the latest way.
- Removed Express JS.
- Removed CLI Pankod.

## About

Next.js is a minimalistic React framework that runs on the browser and the server. It offers developers an easy way to get started, and as it uses React.js for templating, it's also a straightforward way for developers with React experience to get productive quickly.

The advantage of this approach is to be able to create rich user experiences in a uniform way, without compromising SEO (Search Engine Optimisation) factors that are key to good ranking on Google and other search engines.

This boilerplate makes it easier to get up and running with a well-structured Next.js and TypeScript application.

<br/>

## Features

this project provides a lot of features out of the box. Here's an overview of the included components and tools.

| Name                      | Description                                                                                     |
| ------------------------- | ----------------------------------------------------------------------------------------------- |
| Next.JS                   | Minimalistic framework for server-rendered React applications.                                  |
| Storybook                 | An open source tool for developing UI components in isolation for React.                        |
| Typescript                | Superset of JavaScript which primarily provides optional static typing, classes and interfaces. |
| Redux                     | A predictable state container for JavaScript apps with Redux Thunk and Redux Persist.           |
| Redux Toolkit             | The official, opinionated, batteries-included toolset for efficient Redux development           |
| React Hook Form & Yup     | Form management                                                                                 |
| Material UI               | React components for faster and easier web development.                                         |
| Docker                    | A tool designed to make it easier to create, deploy, and run applications by using containers.  |
| Babel                     | The compiler for next generation JavaScript.                                                    |
| ESLint                    | The pluggable linting utility.                                                                  |
| Bundler Analyzer          | Visualize the size of webpack output files with an interactive zoomable treemap.                |
| Jest                      | Javascript testing framework , created by developers who created React.                         |
| React Testing Library     | Simple and complete React DOM testing utilities that encourage good testing practices.          |
| Cypress                   | Javascript automation testing framework.                                                        |
| next-runtime-dotenv       | Expose environment variables to the runtime config of Next.js                                   |
| next-i18next              | An internationalization-framework which returns the value for the current language.             |
| Next Internationalization | Supporting internationalization in next route                                                   |

Branches

| branch name    | Description                                 |
| -------------- | ------------------------------------------- |
| main           | Main branch with material UI Stable version |
| v5-material-ui | Main branch with material UI v5 / @mui      |

## Setup and Usages

Run this script `npm install` or `yarn install` and then to run this project `npm run start:dev` or `yarn run start:dev`.

This project provides somes scripts:

| Script                | Description                                                             |
| --------------------- | ----------------------------------------------------------------------- |
| npm run start         | Running this project in production environment.                         |
| npm run start:dev     | Running this project in development environment.                        |
| npm run start:doc     | Running this project as component documentation.                        |
| npm run start:analyze | Analyzing existing bundle by bundle size visualization in the terminal. |
| npm run test:unit     | Running unit testing with Jest.                                         |
| npm run test:e2e      | Running end to end testing with Cypress.                                |

<br/>

Recommended Visual Studio Extensions:

- Jest
- Jest Snippets
- GitLens - Git supercharge
- Prettier
- JavaScript (ES6) code snippets
- JavaScript and Typescript Nightly
- ESLint
- One Dar Pro (theme)
- Material Icon Theme

## Environment

| Key                 | Description                                              | Example value           |
| ------------------- | -------------------------------------------------------- | ----------------------- |
| NEXT_PUBLIC_API_URL | API url                                                  | http://192.168.1.3:8080 |
| BUNDLE_ANALYZE      | Determine to open bundle visualization in browser or not | true / false            |

## Folder Structure

| Folder                                    | Description                                      |
| ----------------------------------------- | ------------------------------------------------ |
| .storybook                                | Storybook configuration                          |
| coverage                                  | Jest coverage result                             |
| cypress                                   | End to end testing folder                        |
| test/jest.setup.ts                        | Jest setup before the test run                   |
| src/components                            | Atomic design folder structure                   |
| src/definitions                           | Constants                                        |
| src/interface                             | Interfaces                                       |
| src/redux/store.ts                        | Redux store setup                                |
| src/redux/modules                         | Redux modules                                    |
| src/redux/modules/index.ts                | Exporting combine reducer and middleware         |
| src/redux/modules/{name}/index.ts         | Exporting all export file in this folder         |
| src/redux/modules/{name}/{name}.consts.ts | Redux Module Constants for reducer path and name |
| src/redux/modules/{name}/{name}.d.ts      | Redux Module interfaces                          |
| src/redux/modules/{name}/{name}.query.ts  | Redux Module RTK Query                           |
| src/redux/modules/{name}/{name}.slice.ts  | Redux Module RTK Slice / Reducer                 |

## Rules

### Generals

- The import local component/library should be with alias path (use `@ReduxModules/Counter` instead of `../src/Redux/Modules/Counter`), here is available alias path:
  | Alias Path | Description |
  | --------------------- | ----------------------------------------------------------------------- |
  | @Atoms | To access atoms directory which inside component |
  | @Molecules | To access molecules directory inside component |
  | @Organisms | To access organisms directory inside component |
  | @Definitions | To access definitions directory inside src |
  | @Interfaces | To access interfaces directory inside src |
  | @Pages | To access pages directory |
  | @Redux | To access redux directory |
  | @ReduxModules | To access redux/modules directory |
  | @Static | To access public/static directory |

- The imported library should be pyramid sorted and also grouped by:
  | Order Number | Import Area Description |
  | --------------------- | ----------------------------------------------------------------------- |
  | 1 | Import external library here |
  | 2 | Import local component here |
  | 3 | Import redux family here |
  | 4 | Import util/helper/etc function here |
  | 5 | Import Interface here |

### Components

- Component should be writed in functional component
- A function in functional component should be wrapped by `useCallback` to prevent a useless instantiation
- A function has expensive calculation should be wrapped by `useMemo` to prevent a useless calculation
- Functional component should be exported with `React.memo` to prevent a useless rendering
- the interface should exist in a functional component to register incoming props.
- Every component should have snapshot testing
- Every new component shoud have property data-testid with prefix typescript validation, example: `data-testid=button-login`
