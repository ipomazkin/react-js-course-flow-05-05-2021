import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from "react-redux";
import { Posts } from "./Posts";

import { store } from "./store";

export function Lesson7() {
  return (
    <Provider store={store}>
      <div className="app-root">
        <Posts />
      </div>
    </Provider>
  );
}

Lesson7.propTypes = {};
