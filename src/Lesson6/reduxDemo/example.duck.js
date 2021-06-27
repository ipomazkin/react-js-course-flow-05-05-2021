// the duck namespace
export const NAMESPACE = 'example';

// action types
export const SET_MENU_IS_OPEN = `${NAMESPACE}/SET_MENU_IS_OPEN`;

// action creators
export function setMenuIsOpen(value) {
  return {
    type: SET_MENU_IS_OPEN,
    value,
  }
}

// initial state
const initialState = {
  isMenuOpened: false,
};

// reducer
export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_MENU_IS_OPEN:
      return {
        ...state,
        isMenuOpened: action.value,
      };

    default:
      return state;
  }
}

// selectors
export const selectIsMenuOpen = (state) => state[NAMESPACE].isMenuOpened;
