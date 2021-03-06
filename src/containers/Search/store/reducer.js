import ActionTypes from "./constants";

const initialState = {
  searchVideo: [],
};

const searchYoutubeVideoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_START_SUCCESS:
      return {
        ...state,
        searchVideo: action.payload.items,
      };
    case ActionTypes.RESET_SEARCH_FLAG:
      return {
        ...state,
        searchVideo: [],
      };
    default:
      return state;
  }
};

export default searchYoutubeVideoReducer;
