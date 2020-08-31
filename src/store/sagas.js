import { takeEvery } from 'redux-saga/effects';
import { saga as home } from '../pages/home/';

let { GETLIST } = home.types

function* sagas() {
  yield takeEvery(GETLIST, home.action)
}

export default sagas;