import ActionTypes from "./constants";
import { actionChannel } from "redux-saga/effects";

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
    default:
      return state;
  }
};

export default searchYoutubeVideoReducer;
