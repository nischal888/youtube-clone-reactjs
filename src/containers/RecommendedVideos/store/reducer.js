import ActionTypes from "./constants";

const initialState = {
  popularVideos: [],
  token: "",
  pageInfo: "",
};

const getPopularVideosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_POPULAR_VIDEOS_SUCCESS:
      const { items, nextPageToken, pageInfo } = action.payload;

      return {
        ...state,
        popularVideos: state.popularVideos.concat(items),
        token: nextPageToken,
        pageInfo: pageInfo,
      };
    case ActionTypes.RESET_VIDEO_FlAG:
      return {
        ...state,
        popularVideos: [],
      };
    default:
      return state;
  }
};

export default getPopularVideosReducer;
