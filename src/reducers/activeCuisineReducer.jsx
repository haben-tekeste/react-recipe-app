const initState = {
  cuisine: {},
  isLoading: true
};

const ActiveCuisineReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAILS":
      return {
        ...state,
        cuisine: action.payload.cuisine,
        isLoading: action.payload.isLoading
      };
    default:
      return { ...state };
  }
};

export default ActiveCuisineReducer;
