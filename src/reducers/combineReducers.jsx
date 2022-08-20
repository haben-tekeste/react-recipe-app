import { combineReducers } from "redux";
import ActiveCuisineReducer from "./activeCuisineReducer";
import cuisineReducers from "./cuisineReducers";
import NationalCuisineReducer from "./nationalCuisinesReducer";
import SearchRecipeReducer from "./searchRecipeReducer";

export const CombineReducers = combineReducers({
  cuisines: cuisineReducers,
  activeCuisine: ActiveCuisineReducer,
  nationalCuisine: NationalCuisineReducer,
  searchRecipe:SearchRecipeReducer
});
