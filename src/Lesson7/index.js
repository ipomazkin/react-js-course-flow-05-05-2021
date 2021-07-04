import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from "react-redux";
import { Posts } from "./Posts";
import { FiltersDemo } from "./FiltersDemo";
import { PostsLive } from "./PostsLive";
import { someGenerator } from "./utils";

import { store } from "./store";

window.someGenerator = someGenerator;

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
