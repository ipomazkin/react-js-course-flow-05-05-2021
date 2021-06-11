import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

class CoordinatesMonitor extends PureComponent {
  render() {
    let { x, y } = this.props;

    return (
      <div className="monitor">
        {(x === null || y === null) ? "Loading..." : (
          <Fragment>
            <div>X: {x}px</div>
            <div>Y: {y}px</div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default CoordinatesMonitor;

CoordinatesMonitor.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
};

CoordinatesMonitor.defaultProps = {
  x: null,
  y: null,
};
