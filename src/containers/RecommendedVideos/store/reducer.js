import ActionTypes from "./constants";

const initialState = {
  popularVideos: null,
  token: "",
  pageInfo: "",
};

const getPopularVideosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_POPULAR_VIDEOS_SUCCESS:
      const { items, nextPageToken, pageInfo } = action.payload;
      return {
        ...state,
        popularVideos: items,
        token: nextPageToken,
        pageInfo: pageInfo,
      };
    default:
      return state;
  }
};

export default getPopularVideosReducer;
