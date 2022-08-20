const initState = {
  search: {},
  isLoading: true,
};
const SearchRecipeReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_SEARCH":
      return {
        ...state,
        search: action.payload.search,
        isLoading: action.payload.isLoading,
      };
    default:
      return { ...state };
  }
};

export default SearchRecipeReducer;
