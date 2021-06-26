import Axios from "axios";

export const fetchIngredients = async (userInput) => {
  let res = await Axios.get(
    `https://api.spoonacular.com/food/ingredients/search?query=${userInput}&apiKey=${process.env.spoonacularApiKey}`
  );
  return res.data.results;
};
