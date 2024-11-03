# Welcome to State Rental App!

This application is created with React.js & TailwindCSS on front-end, and with json-server running on back-end with custom `server.js` file. 

As the application is about to expand, it is **highly recommended** to scale up the application by:
- most likely making a transition from React.js to Next.js (SSR, routing, fetch cache etc.) or Astro
- changing the useReducer implementation to Redux Toolkit
- add React Query to fetch to eliminate the need of duplicating loading states inside reducers
- implemented E2E testing with Cypress or any related tool

## Important!
The current implementation of the app's UI is **only mobile-friendly**. As the application grows, the desktop version will be applied.

## Newest TODOs
- Add unit tests to React.js components

# How to run the application?

### Make sure that you run the application with both front-end and back-end working simultaneously

```
npm install
npm run dev:withdb
```
