![This is header image](/src/assets/logo.png)

# Folksoul

### Best musician bend in the world

### Table of Contents
* [Prerequisites](#Prerequisites)
* [Tech Stack](#Tech-Stack)
* [Getting Started](#Getting-Started)
* [Project Structure](#Project-Structure)
* [Testing](#Testing)
* [Deployment](#Deployment)
* [Resources](#Resources)

#
### Prerequisites

* <img src="readme/nodejs.png" width="25" style="top: 8px" /> *Node JS @16.X and up*
* <img src="readme/npm.png" width="25" style="top: 8px" /> *npm @8 and up*
* <img src="readme/typescript.png" width="25" style="top: 8px" /> *typescript @4 and up*

#
### Tech Stack

* <img src="readme/react.png" width="25" style="top: 8px" /> *React @ 18.2.0 - front-end framework*
* <img src="readme/cypress.png" width="25" style="top: 8px" /> *Cypress @10.7.0 - end to end testing Framework*
* <img src="readme/tailwind.png" width="25" style="top: 8px" /> *Tailwind @3.0.24 - CSS framework*
* <img src="readme/react-hook-form.png" width="25" style="top: 8px" /> *React-hook-form @7.34.0 - library for forms*
* <img src="readme/react-router.png" width="25" style="top: 8px" /> *React-router @6.3.0 - library for routing*
* <img src="readme/react.png" width="25" style="top: 8px" /> *React-use-cookie @1.4.0 - A React hook for managing cookies with no dependencies.*
* <img src="readme/redux.png" width="25" style="top: 8px" /> *react-redux @8.0.2 - A Predictable State Container for JS Apps*

#
### Getting Started
1. First of all you need to clone app repository from github:
```
git clone https://github.com/RedberryInternship/folksoul-front-nikanoza.git
```
2. Next step requires install all the dependencies.

```
npm install
```
3. Also you need to create .env file where copy information from .env.example file

```
cp .env.example .env
```

#
### Project Structure

```
|--- src
|   |--- assets # project images
|   |--- components # reusable components
|   |---|--- index.ts # export all components
|   |--- pages # all page components
|   |---|--- page-folder # page folder name
|   |---|---|--- page-name.ts # react component
|   |---|---|--- index.ts # export default component
|   |---|--- index.ts # export all pages
|   |--- services # request functions
|   |--- svg # svg components folder
|   |--- store # redux store folder
|   |---|--- slices # redux state slices
|   |---|--- actions # redux state async actions
|   |---|--- hooks.ts # app redux hooks
|   |---|--- redux.ts # redux store
|   |---|--- index.ts # exports from store
|   |--- types # types files
- .eslintrc.json  # eslint config file
- .prettierrc.json  # prettier config file
- tailwind.config.js # tailwind config file
- package.json     # dependency manager configurations
```
#
### Testing

For testing we are using Cypress. You can see all testing files on Cypres e2e subfolder.
```
cypress/e2e
```
If you want to see test in action, you need install cypress first

```
npm install cypress --save-dev
```
also you need to create cypress.config.ts file and move settings from cypress.config.ts.example there
```
cp cypress.config.ts.example cypress.config.ts
```
and also in the cypress folder is tsconfig.json file for some typescript configuration.

after all open Cypress
```
npx cypress open
``` 
[More information about Cypress](https://www.cypress.io)

#
### Deployment
Before every deployment you need to create build file.
```
npm run build
```
after this you can use this file to deploy project on server.

#
### Resources
* [figma](https://www.figma.com/file/ferG8kznuy5s0hMhMZa2Hi/FolkSoul---Bootcamp?node-id=0%3A1).
* [Api documentation](https://folksoul-api.nika-nozadze.redberryinternship.ge/)
* [github commit rules](https://redberry.gitbook.io/resources/git-is-semantikuri-komitebi)