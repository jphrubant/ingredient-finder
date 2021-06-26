import React from "react";

export const Ingredient = ({ name, image }) => {
  return (
    <div>
      <p>{name}</p>
      <img src={`https://spoonacular.com/cdn/ingredients_100x100/${image}`} alt="ingredient"></img>
    </div>
  );
};
