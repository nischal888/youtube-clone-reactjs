import ActionTypes from "./constants";

export const searchYoutubeVideo = (query) => {
  return {
    type: ActionTypes.SEARCH_START,
    query,
  };
};
export const searchYoutubeVideoSuccess = (payload) => {
  return {
    type: ActionTypes.SEARCH_START_SUCCESS,
    payload,
  };
};
export const resetSearchFlag = (payload) => {
  return {
    type: ActionTypes.RESET_SEARCH_FLAG,
    payload,
  };
};
