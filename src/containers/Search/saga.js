import { takeEvery, put, call } from "redux-saga/effects";
import * as Apis from "./apis";
import * as action from "./store/actions";
import ActionTypes from "./store/constants";
import * as GlobalAction from "../../actions";
import { wrapByLoader } from "../../utility";

const searchYoutubeVideoSaga = ({ query }) =>
  wrapByLoader(function* () {
    const response = yield call(Apis.searchYoutubeVideoApi, query);
    const data = yield response.json();
    if (!data.error) {
      yield put(action.searchYoutubeVideoSuccess(data));
    } else {
      yield put(GlobalAction.errorOccured(data));
    }
  });

export default [takeEvery(ActionTypes.SEARCH_START, searchYoutubeVideoSaga)];
