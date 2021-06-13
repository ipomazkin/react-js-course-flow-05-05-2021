import React, { useState, useCallback, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const TestRef = ({ rootRef }) => {
  return (
    <div ref={rootRef}>
      <h1>Test content</h1>
    </div>
  );
};

export function MainExample(props) {
  let [isShow, setShow] = useState(false);
  let ref = useRef(null);

  useEffect(() => {
    console.log('-----------------', ref);
  });

  return (
    <div className="main-example">
      <button onClick={() => setShow(!isShow)}>{isShow ? "hide" : "show"}</button>
      <TestRef ref={ref} />
    </div>
  );
}

MainExample.propTypes = {};
