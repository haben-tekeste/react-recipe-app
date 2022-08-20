const initState = {
  italian: [],
  american: [],
  thai: [],
  japanse: [],
  isLoadin:true
};

const NationalCuisineReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_NATIONAL_CUISINES":
      return {
        ...state,
        italian: action.payload.italian,
        american: action.payload.american,
        thai: action.payload.thai,
        japanese:action.payload.japanese,
        isLoading:action.payload.isLoading
      };
    default:
      return { ...state };
  }
};

export default NationalCuisineReducer;
