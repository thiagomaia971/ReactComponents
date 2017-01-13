import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { fetchSuccess } from "../actions/fetch";

function* _fetchSuccess(action) {
   try {
      console.log("saga start")
      yield put(fetchSuccess);
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* watchFetchSuccess() {
  yield takeEvery("USER_FETCH_REQUESTED", _fetchSuccess);
}

export default watchFetchSuccess;