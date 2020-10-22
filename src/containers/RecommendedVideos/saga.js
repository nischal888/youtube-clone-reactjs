import { put, call, takeEvery, takeLatest } from "redux-saga/effects";
import * as Apis from "./apis";
import * as action from "./store/actions";
import ActionTypes from "./store/constants";
import { wrapByLoader } from "../../utility";

// const getPopularVideosSaga = ({ token }) =>
//   wrapByLoader(function* () {
//     console.log("saga", token);
//     const response = yield call(Apis.getPopularVideosApi, token);
//     const data = yield response.json();
//     yield put(action.getPopularVideosSuccess(data));
//   });
function* getPopularVideosSaga({ token }) {
  const response = yield call(Apis.getPopularVideosApi, token);
  const data = yield response.json();
  yield put(action.getPopularVideosSuccess(data));
}
export default [
  takeEvery(ActionTypes.GET_POPULAR_VIDEOS, getPopularVideosSaga),
];
