import { createSlice } from "@reduxjs/toolkit";

// namespace
export const NAMESPACE = 'postsByThunk';

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
  },
});

// reducer
const reducer = slice.reducer;
export default reducer;

// action creators
export const { load, loaded } = slice.actions;

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(load());

    let error = null,
      items = [];

    try {
      let response = await fetch("https://60bb880442e1d00017620c95.mockapi.io/Posts");
      items = await response.json();
    } catch (e) {
      error = e.message;
    }

    dispatch(loaded({
      error,
      items,
    }));
  };
};

