import axios from "axios";
import { URL_TRENDING, URL_VEGETARIAN } from "../url";

const cuisineAction = () => async (dispatch) => {
  const vegetarianData = await axios.get(URL_VEGETARIAN());
  const trendingData = await axios.get(URL_TRENDING());
  dispatch({
    type: "FETCH_CUISINES",
    payload: {
      vegetarian: vegetarianData,
      trending: trendingData,
      isLoading:false
    },
  });
};

export default cuisineAction;