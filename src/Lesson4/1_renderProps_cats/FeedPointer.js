import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import MouseWatcher from "./MouseWatcher";

class FeedPointer extends PureComponent {
  render() {
    return (
      <MouseWatcher>{({x, y}) => (
        <div style={{transform: `translate(${x}px, ${y}px)`}} className="feed">
          <div className="feed__cont">
            🐟
          </div>
        </div>
      )}</MouseWatcher>
    );
  }
}

export default FeedPointer;

FeedPointer.propTypes = {

};

FeedPointer.defaultProps = {

};
