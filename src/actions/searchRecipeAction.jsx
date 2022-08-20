import axios from "axios";
import { URL_SEARCH_RECIPE } from "../url";

const SearchRecipeAction = (dishName) => async (dispatch) => {
  const searchData = await axios.get(URL_SEARCH_RECIPE(dishName));

  dispatch({
    type: "FETCH_SEARCH",
    payload: {
      search: searchData,
      isLoading:false
    },
  });
};

export default SearchRecipeAction;
