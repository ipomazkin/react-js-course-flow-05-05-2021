import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Spring, animated } from 'react-spring'

class SpringCat extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      x: props.defaultX,
      y: props.defaultY,
      prevX: props.defaultX,
      prevY: props.defaultY,
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.x !== null && props.y !== null) {
      return {
        x: props.x,
        y: props.y,
        prevX: state.x,
        prevY: state.y,
      }
    }

    return null;
  }

  render() {
    let { speed, delay, children } = this.props;
    let { x, y, prevX, prevY } = this.state;

    return (
      <Spring from={{x: prevX, y: prevY}} to={{x, y}} delay={delay}>
        {(styles) => (
          <animated.div style={styles}>
            <div className="cat cat--no-fixed">
              <div className="cat__cont">
                {children}
              </div>
            </div>
          </animated.div>
        )}
      </Spring>
    );
  }
}

export default SpringCat;

SpringCat.propTypes = {
  children: PropTypes.node,
  x: PropTypes.number,
  y: PropTypes.number,
  defaultX: PropTypes.number,
  defaultY: PropTypes.number,
  speed: PropTypes.number,
  delay: PropTypes.number,
};

SpringCat.defaultProps = {
  x: 0,
  y: 0,
  defaultX: 0,
  defaultY: 0,
  speed: 1000,
  delay: 400,
};
