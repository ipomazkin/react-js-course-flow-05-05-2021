import { createSlice } from "@reduxjs/toolkit";
import { all, call, fork, put, select, take, takeEvery, spawn, join, cancel } from 'redux-saga/effects';
import { pause } from "./utils";

// namespace
export const NAMESPACE = 'settings';

// slice
const slice = createSlice({
  name: NAMESPACE,
  initialState: {
    isMenuOpen: false,
    isMobile: false,
  },
  reducers: {
    set(state, { payload: { key = null, value = null, values = null } }) {
      // @reduxjs/toolkit использует immer прямо из коробки
      if (key !== null) {
        state[key] = value;
      } else if (values !== null) {
        Object.keys(values).forEach(k => state[k] = values[k]);
      }
    }
  },
});

// reducer
const reducer = slice.reducer;
export default reducer;

// action creators
export const { set } = slice.actions;
export const setIsMenuOpen = (v = false) => set({ key: 'isMenuOpen', value: v });
export const setIsMobile = (v = false) => set({ key: 'isMobile', value: v });

// selectors
export const selectField = (s, k) => s[NAMESPACE][k];
export const selectIsMenuOpen = s => selectField(s, 'isMenuOpen');

// sagas
function* takeExampleSaga() {
  console.log('---> takeExampleSaga started');
  let action = yield take("*");
  console.log('---> takeExampleSaga has taken an action:', action);
}

function* takeExample2Saga() {
  console.log('---> takeExample2Saga started');
  while (true) {
    let action = yield take("*");
    console.log('---> takeExample2Saga has taken an action:', action);
  }
}

function* takeEveryExampleWorker(action) {
  console.log('---> takeEveryExampleWorker has taken an action:', action);
}

function* takeEveryExampleWatcher() {
  console.log('---> takeEveryExampleWatcher started');
  yield takeEvery(set.toString(), takeEveryExampleWorker)
}

function* takeLatestExampleWorker(action) {
  console.log('---> takeLatestExampleWorker started:', action);
  yield pause();
  console.log('---> takeLatestExampleWorker finished');
}

function* takeLeadingExampleWorker(action) {
  console.log('---> takeLeadingExampleWorker started:', action);
  yield pause();
  console.log('---> takeLeadingExampleWorker finished');
}

function* selectAndPutExampleWorker() {
  console.log('---> selectAndPutExampleWorker started');
  let state = yield select(s => s);
  console.log('---> selectAndPutExampleWorker: selected state', state);
  let dispatchedAction = yield put({type: 'TEST'});
  console.log('---> selectAndPutExampleWorker: dispatch an action', dispatchedAction);
}

function* getDataSaga(makeError = false) {
  console.log('---> getDataSaga started');
  if (makeError) throw new Error('getDataSaga error');
  let result = yield call(fetch, "https://60bb880442e1d00017620c95.mockapi.io/Posts");
  let response = yield result.json();
  yield call(pause);
  console.log('---> getDataSaga finished');
  return response;
}

function* callExampleWorker() {
  console.log('---> callExampleWorker started');
  let response = yield getDataSaga();
  console.log('---> callExampleWorker finished', response);
}

function* forkExampleWorker() {
  console.log('---> forkExampleWorker started');
  let task = yield fork(getDataSaga, false);
  console.log('---> forkExampleWorker finished', task);
}

function* spawnExampleWorker() {
  console.log('---> spawnExampleWorker started');
  let task = yield spawn(getDataSaga, true);
  console.log('---> spawnExampleWorker finished', task);
}

function* joinExampleWorker() {
  console.log('---> joinExampleWorker started');
  let task = yield fork(getDataSaga, false);
  let response = yield join(task);
  console.log('---> joinExampleWorker finished', response);
}

function* cancelExampleWorker() {
  console.log('---> cancelExampleWorker started');
  let task = yield fork(getDataSaga, false);
  yield cancel(task);
  console.log('---> cancelExampleWorker finished');
}


// root saga
export function* saga() {
  yield all([
    takeExampleSaga(),
    // takeExample2Saga(),
    // takeEveryExampleWatcher(),
    // takeLatest(set, takeLatestExampleWorker),
    // takeLeading(set, takeLeadingExampleWorker),
    // takeEvery(set, selectAndPutExampleWorker),
    // takeEvery(set, callExampleWorker),
    // takeEvery(set, forkExampleWorker),
    // takeEvery(set, spawnExampleWorker),
    // takeEvery(set, joinExampleWorker),
    // takeEvery(set, cancelExampleWorker),
  ]);
}

