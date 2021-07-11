import React from 'react';
import PropTypes from 'prop-types';

export function NumberInput({ value, onChange }) {
  const handleChange = (e) => {
    let v = e.target.value;
    v = v.replace(/\D/g,'');
    onChange(v);
  };

  return (
    <div className="number">
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}

NumberInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
