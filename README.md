# Ingrerdient Finder

Ingredient Finder is a simple app to lookup ingredients built using Netx.js, ContextAPI Chakra UI and the Spoonacular API.

The app uses local storage to store a user's search history.

## Running the app

Ingredient Finder can be run in development using the command `npm run dev`

The app is also deployed via Netlify and [can be accessed here](https://wizardly-shirley-9d09d9.netlify.app/)

## User Stories:

- As a user I want to find a list of ingredients based on my query.
- As a user I want to see my search history.
- As a user I want to easily repeat previous searches.

## Backlog:

- Allow user to delete history items

## Components:

- History
- Ingredient
- SearchBar

## Global State:
- ingredients
- userInput
- history
- showHistory
- showSearchError
- isLoading

## Actions
- SET_INGREDIENTS
- TOGGLE_SEARCH_ERROR
- SET_SHOW_HISTORY
- TOGGLE_IS_LOADING
