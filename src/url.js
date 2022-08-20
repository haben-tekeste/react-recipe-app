export const URL_VEGETARIAN = () =>
  `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian&number=9`;

export const URL_TRENDING = () =>
  `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`;

export const URL_CUISINE_DETAILS = (ID) =>
  `https://api.spoonacular.com/recipes/${ID}/information?apiKey=${process.env.REACT_APP_API_KEY}`;

export const URL_COUNTRY_CUISINE = (country) =>
  `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${country}&number=10`;

export const URL_SEARCH_RECIPE = (dishName) => (
  `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${dishName}&number=10`
)