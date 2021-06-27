export default function Reducer (state, action) {
  switch (action.type) {
    case "SET_INGREDIENTS":
      return {
        ...state,
        ingredients: action.payload,
      };
    case "TOGGLE_SEARCH_ERROR":
      return {
        ...state,
        showSearchError: action.payload,
      };
    case "SET_HISTORY":
      let historyItems = [...state.history, action.payload]
      localStorage.setItem('ingredients', JSON.stringify(historyItems))
      console.log("window.localStorage", window.localStorage)
      return {
        ...state,
        history: historyItems,
      };
    case "SET_SHOW_HISTORY":
      return {
        ...state,
        showHistory: action.payload,
      };
    case "TOGGLE_IS_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
