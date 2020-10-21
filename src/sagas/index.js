import { all } from "redux-saga/effects";

import getPopularVideosSaga from "../containers/RecommendedVideos/saga";
import getYouTubeVideosSaga from "../containers/Search/saga";

function* rootSaga() {
  yield all([...getPopularVideosSaga, ...getYouTubeVideosSaga]);
}

export default rootSaga;
