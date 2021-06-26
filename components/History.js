import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const History = () => {
  const { state, setIngredients } = useContext(GlobalContext);

  let latestSearches = state.history.slice(0, 9)

  return (
    <div>
      <ul>
        {latestSearches.map((item, index) => {
          return (
            <li key={index}>
              <button onClick={() => setIngredients(item)}>{item}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
