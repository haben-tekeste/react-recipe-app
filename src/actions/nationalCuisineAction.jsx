import axios from "axios";
import { URL_COUNTRY_CUISINE } from "../url";

const NationalCuisineAction = () => async (dispatch) => {
  const italianCuisine = await axios.get(URL_COUNTRY_CUISINE("Italian"));
  const americanCuisine = await axios.get(URL_COUNTRY_CUISINE("American"));
  const thaiCuisine = await axios.get(URL_COUNTRY_CUISINE("Thai"));
  const japanseCuisine = await axios.get(URL_COUNTRY_CUISINE("Japanese"));

  dispatch({
    type: "FETCH_NATIONAL_CUISINES",
    payload: {
      italian: italianCuisine,
      american: americanCuisine,
      thai: thaiCuisine,
      japanese: japanseCuisine,
      isLoading: false,
    },
  });
};

export default NationalCuisineAction;
