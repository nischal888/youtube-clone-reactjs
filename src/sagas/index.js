import { all } from "redux-saga/effects";

import getPopularVideosSaga from "../containers/RecommendedVideos/saga";

function* rootSaga() {
  yield all([...getPopularVideosSaga]);
}

export default rootSaga;
