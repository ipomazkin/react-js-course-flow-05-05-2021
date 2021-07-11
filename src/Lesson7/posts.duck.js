import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";
import { all, takeEvery, put, call } from 'redux-saga/effects';

export const NAMESPACE = 'postsNew2';

export const LOAD_START = `${NAMESPACE}/LOAD_START`;
export const LOAD_EMD = `${NAMESPACE}/LOAD_EMD`;
export const LOAD = `${NAMESPACE}/LOAD`;

const initialState = {
  items: null,
  isLoading: false,
  error: null,
};

export function reducer(state = initialState, action) {
  let { type, items = [], error = null } = action;

  switch (type) {
    case LOAD_START:
      return produce(state, (s) => {
        s.isLoading = true;
      });

    case LOAD_EMD:
      return produce(state, (s) => {
        s.items = items;
        s.error = error;
        s.isLoading = false;
      });
  }

  return state;
}
export default reducer;

export function load() {
  return {
    type: LOAD,
  };
}

export function loadStart() {
  return {
    type: LOAD_START,
  };
}

export function loadEnd(items = [], error = null) {
  return {
    type: LOAD_EMD,
    items,
    error,
  };
}

function* loadSaga(action) {
  yield put(loadStart());

  let items = [],
    error = null;

  try {
    let response = yield call(fetch, "https://60bb880442e1d00017620c95.mockapi.io/Posts");
    items = yield call(response.json.bind(response));
  } catch (e) {
    error = e.message;
  }

  yield put(loadEnd(items, error));
}

export function* saga() {
  yield all([
    takeEvery(LOAD, loadSaga),
  ]);
}
