import { put, call, takeEvery } from "redux-saga/effects";
import * as Apis from "./apis";
import * as action from "./store/actions";
import ActionTypes from "./store/constants";

function* getPopularVideosSaga() {
  const response = yield call(Apis.getPopularVideosApi);
  const data = yield response.json();
  yield put(action.getPopularVideosSuccess(data));
}

export default [
  takeEvery(ActionTypes.GET_POPULAR_VIDEOS, getPopularVideosSaga),
];
