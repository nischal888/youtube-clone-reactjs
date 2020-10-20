import ActionTypes from "./constants";

export const getPopularVideos = (token) => {
  return {
    type: ActionTypes.GET_POPULAR_VIDEOS,
    token,
  };
};
export const getPopularVideosSuccess = (payload) => {
  return {
    type: ActionTypes.GET_POPULAR_VIDEOS_SUCCESS,
    payload,
  };
};
