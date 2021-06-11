import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Cat extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      x: props.defaultX,
      y: props.defaultY,
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.x !== null && props.y !== null) {
      return {
        x: props.x,
        y: props.y,
      }
    }

    return null;
  }

  render() {
    let { speed, delay, children } = this.props;
    let { x, y } = this.state;

    return (
      <div className="cat" style={{
        transform: `translate(${x}px, ${y}px)`,
        transition: `transform ${speed}ms ${delay}ms`,
      }}>
        <div className="cat__cont">
          {children}
        </div>
      </div>
    );
  }
}

export default Cat;

Cat.propTypes = {
  children: PropTypes.node,
  x: PropTypes.number,
  y: PropTypes.number,
  defaultX: PropTypes.number,
  defaultY: PropTypes.number,
  speed: PropTypes.number,
  delay: PropTypes.number,
};

Cat.defaultProps = {
  x: 0,
  y: 0,
  defaultX: 0,
  defaultY: 0,
  speed: 1000,
  delay: 400,
};
