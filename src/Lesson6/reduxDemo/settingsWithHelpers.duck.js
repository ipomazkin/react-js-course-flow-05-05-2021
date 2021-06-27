import { createSlice } from '@reduxjs/toolkit'
import { produce } from "immer";

// duck namespace
export const NAMESPACE = "settingsWithHelpers";

// initial state
const initialState = {
  items: [
    {id: 1, title: 'Test 1'},
    {id: 2, title: 'Test 2'},
    {id: 3, title: 'Test 3'},
    {id: 4, title: 'Test 4'},
  ],
  isOpened: false,
};

// redux slice
const slice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    addItem: (state, { payload: { item } }) =>  produce(state, (s) => {
      s.items.push(item);
    }),
    updateItem: (state, { payload: { item, id } }) =>  produce(state, (s) => {
      let index = s.items.findIndex(el => el.id === id);
      if (index > -1) {
        s.items[index] = {
          ...s.items[index],
          ...item,
        };
      }
    }),
    removeItem: (state, {payload: { id }}) =>  produce(state, (s) => {
      let index = s.items.findIndex(el => el.id === id);
      if (index > -1) {
        s.items.splice(index, 1);
      }
    }),
    setField: (state, { payload: { key, value } }) =>  produce(state, (s) => {
      s[key] = value;
    }),
  },
});

// extract action creators
export const { addItem, updateItem, removeItem, setField } = slice.actions;

// reducer
const reducer = slice.reducer;
export default reducer;

// selectors
export const selectItems = state => state[NAMESPACE].items;
export const selectIsOpened = state => state[NAMESPACE].isOpened;
