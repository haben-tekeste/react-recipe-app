const initState = {
  vegetarian: [],
  trending: [],
  search: {},
  isLoading: true,
};

const cuisineReducers = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_CUISINES":
      return {
        ...state,
        vegetarian: action.payload.vegetarian,
        trending: action.payload.trending,
        isLoading: action.payload.isLoading,
      };
    default:
      return { ...state };
  }
};

export default cuisineReducers;
