import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class TextInput extends PureComponent {
  render() {
    let { label, inputRef, ...rest } = this.props;

    return (
      <div className="text-input">
        <label>{label}: <input ref={inputRef} {...rest}/></label>
      </div>
    );
  }
}

TextInput.propTypes = {
  label: PropTypes.node,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.node,
    }),
  ]),
};

TextInput.defaultProps = {
  label: null,
  inputRef: null,
};

export const TextInputWithForwardedRef = React.forwardRef((props, ref) => (
  <TextInput {...props} inputRef={ref} />
));
