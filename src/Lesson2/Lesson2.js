import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { items } from './components';

/**
 * @param {Object.<string, *>} props
 * @constructor
 */
export const Lesson2 = (props) => {
  window.items = items;

  return (
    <Fragment>
      {items.map((el, i) => (
        <div key={i} style={{border: "1px solid black", margin: '1em', padding: '1em'}}>
          <h2>Component "{el.type.name}"</h2>
          {el}
        </div>
      ))}
    </Fragment>
  );
};
