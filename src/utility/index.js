import * as GlobalAction from "../actions";
import { put } from "redux-saga/effects";

export function* wrapByLoader(fn) {
  yield put(GlobalAction.fetchStart());
  yield fn();
  yield put(GlobalAction.fetchEnd());
}
