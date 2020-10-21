import { takeEvery, put, call } from "redux-saga/effects";
import * as Apis from "./apis";
import * as action from "./store/actions";
import ActionTypes from "./store/constants";

function* searchYoutubeVideoSaga({ query }) {
  const response = yield call(Apis.searchYoutubeVideoApi, query);
  const data = yield response.json();
  console.log("data", data);
  yield put(action.searchYoutubeVideoSuccess(data));
}

export default [takeEvery(ActionTypes.SEARCH_START, searchYoutubeVideoSaga)];
