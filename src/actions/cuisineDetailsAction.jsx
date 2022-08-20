import axios from "axios";
import { URL_CUISINE_DETAILS } from "../url";

const cuisineDetailsAction = (id) => async (dispatch) => {
  const ID = parseInt(id);
  const details = await axios.get(URL_CUISINE_DETAILS(ID));
  dispatch({
    type: "GET_DETAILS",
    payload: {
      cuisine: details,
      isLoading: false,
    },
  });
};

export default cuisineDetailsAction;
