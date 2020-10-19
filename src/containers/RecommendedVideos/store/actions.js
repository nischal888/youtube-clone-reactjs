import ActionTypes from "./constants";

export const getPopularVideos = () => {
  return {
    type: ActionTypes.GET_POPULAR_VIDEOS,
  };
};
export const getPopularVideosSuccess = (payload) => {
  return {
    type: ActionTypes.GET_POPULAR_VIDEOS_SUCCESS,
    payload,
  };
};
