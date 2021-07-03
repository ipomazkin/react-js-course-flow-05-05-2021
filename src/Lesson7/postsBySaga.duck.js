import { createSlice } from "@reduxjs/toolkit";
import { all, takeLatest, put, call } from 'redux-saga/effects';

// namespace
export const NAMESPACE = 'postsBySaga';

// slice
const slice = createSlice({
  name: NAMESPACE,
  initialState: {
    isLoading: false,
    error: null,
    items: null,
  },
  reducers: {
    load(state) {
      state.isLoading = true;
    },

    loaded(state, { payload: { error = null, items = [] } }) {
      state.isLoading = false;
      state.error = error;
      state.items = items;
    },

    fetchPosts() {},
  },
});

// reducer
const reducer = slice.reducer;
export default reducer;

// action creators
export const { load, loaded, fetchPosts } = slice.actions;

// sagas
function* fetchPostsSaga() {
  yield put(load());

  let error = null,
    items = [];

  try {
    let response = yield call(fetch, "https://60bb880442e1d00017620c95.mockapi.io/Posts");
    items = yield call(() => response.json());
  } catch (e) {
    error = e.message;
  }

  yield put(loaded({
    error,
    items,
  }));
}

// root saga
export function* saga() {
  yield all([
    takeLatest(fetchPosts, fetchPostsSaga),
  ]);
}
