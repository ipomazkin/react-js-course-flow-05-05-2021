import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from "./theme";

class Button extends PureComponent {
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <button style={{ color: theme.color.text.link, padding: `${theme.padding.default}px` }}>
            {this.props.children}
          </button>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Button;

Button.propTypes = {};

Button.defaultProps = {};
