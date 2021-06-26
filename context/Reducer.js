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
    // case 'DELETE_TRANSACTION':
    //   return {
    //     ...state,
    //     transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
    //   }
    default:
      return state;
  }
};
