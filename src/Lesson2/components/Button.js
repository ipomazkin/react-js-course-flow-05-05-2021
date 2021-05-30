import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component {
  render() {
    let {
      color,
      as,
      children,
      ...rest
    } = this.props;

    let btnProps = {
      className: `button`,
      style: {
        backgroundColor: color,
      },
      children,
      ...rest,
    };

    if (as === "link") {
      return (
        <a {...btnProps} />
      );
    } else if (as === "div") {
      return (
        <div {...btnProps} />
      );
    } else if (as === "button") {
      return (
        <button {...btnProps} />
      );
    }

    return (
      <span>Error!</span>
    );
  }
}

// npm i prop-types

export default Button;

Button.propTypes = {
  color: PropTypes.string,
  as: PropTypes.oneOf([
    "div",
    "link",
    "button",
  ]).isRequired,
};

Button.defaultProps = {
  color: "red",
  as: "button",
};
