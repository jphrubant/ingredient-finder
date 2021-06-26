import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

import { fetchIngredients } from "./../pages/api/index";

const initialState = {
  ingredients: [],
  userInput: "",
  history: [],
  showHistory: false,
  showSearchError: false,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const setIngredients = async (userInput) => {
    let res = await fetchIngredients(userInput)

    if (res.length > 0) {
      dispatch({
        type: "SET_INGREDIENTS",
        payload: res,
      });
      toggleSearchError(false);
    } else {
      dispatch({
        type: "SET_INGREDIENTS",
        payload: [],
      });
      toggleSearchError(true);
    }
  };

  const toggleSearchError = (bool) => {
    dispatch({
      type: "TOGGLE_SEARCH_ERROR",
      payload: bool,
    });
  };

  const setHistory = (userInput) => {
    dispatch({
      type: "SET_HISTORY",
      payload: userInput,
    });
  };

  const showHistory = (bool) => {
    dispatch({
      type: "SET_SHOW_HISTORY",
      payload: bool,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        setIngredients,
        toggleSearchError,
        setHistory,
        showHistory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
