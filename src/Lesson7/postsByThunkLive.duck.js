import { createSlice } from "@reduxjs/toolkit";

export const NAMESPACE = 'postsByThunkLive';

const slice = createSlice({
  name: NAMESPACE,
  initialState: {
    isLoading: false,
    data: null,
    error: null,
  },
  reducers: {
    loadStart: (state, action) => {
      state.isLoading = true;
    },
    loadEnd: (state, action) => {
      let { payload: { data = [], error = null } } = action;
      state.isLoading = false;
      state.data = data;
      state.error = error;
    },
  },
});

export const { loadStart, loadEnd } = slice.actions;

export const load = () => {
  return async (dispatch) => {
    dispatch(loadStart());

    let error = null,
      data = [];

    try {
      let response = await fetch("https://60bb880442e1d00017620c95.mockapi.io/Posts");
      data = await response.json();
    } catch (e) {
      error = e.message;
    }

    dispatch(loadEnd({
      data,
      error,
    }));
  };
};

const reducer = slice.reducer;
export default reducer;

export const selectIsLoading = (s) => s[NAMESPACE].isLoading;
export const selectData = (s) => s[NAMESPACE].data;
export const selectError = (s) => s[NAMESPACE].error;


