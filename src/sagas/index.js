import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import { watchFetchSuccess } from "./fetch";

export default function* rootSaga() {
    yield [
        watchFetchSuccess()
    ]
}
