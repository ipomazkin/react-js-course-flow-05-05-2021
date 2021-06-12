import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from "./theme";

class Button extends PureComponent {
  render() {
    let theme = this.context;

    console.log('-----------------', theme);

    let styles = {
      padding: `${theme.padding.small}px`,
      color: theme.color.text.link,
    };

    return (
      <button style={styles}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;

Button.contextType = ThemeContext;

Button.propTypes = {};

Button.defaultProps = {};
