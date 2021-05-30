import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { items } from './components';
import { ExampleRenderer } from "../utils/ExampleRenderer";

/**
 * @param {Object.<string, *>} props
 * @constructor
 */
export const Lesson2 = (props) => {
  return (
    <Fragment>
      <ExampleRenderer title="Lesson 2">
        {items}
      </ExampleRenderer>
    </Fragment>
  );
};
