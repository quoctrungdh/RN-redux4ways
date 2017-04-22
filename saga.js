import { put, takeEvery } from 'redux-saga/effects';
import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
} from './constants';
import getPeople from './api';

function* fetchData() {
  try {
    const data = yield getPeople();
    yield put({ type: FETCHING_DATA_SUCCESS, data });
  } catch (error) {
    yield put({ type: FETCHING_DATA_FAILURE });
  }
}

function* dataSaga() {
  yield takeEvery(FETCHING_DATA, fetchData);
}

export default dataSaga;
