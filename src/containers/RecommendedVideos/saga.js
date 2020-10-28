import { put, call, takeLatest } from "redux-saga/effects";
import * as Apis from "./apis";
import * as action from "./store/actions";
import * as GlobalAction from "../../actions";
import ActionTypes from "./store/constants";

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
  if (!data.error) {
    yield put(action.getPopularVideosSuccess(data));
  } else {
    yield put(GlobalAction.errorOccured(data));
  }
}
export default [
  takeLatest(ActionTypes.GET_POPULAR_VIDEOS, getPopularVideosSaga),
];
