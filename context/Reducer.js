export default (state, action) => {
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
      return {
        ...state,
        history: [action.payload, ...state.history],
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
