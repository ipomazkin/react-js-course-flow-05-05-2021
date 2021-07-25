import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { validate } from "email-validator";

export function EmailValidation() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setEmail(e.target.value)
  };

  const handleBlur = (e) => {
    console.log('-----------------', {
      value: e.target.value,
      isValid: validate(e.target.value),
    });
    if (!validate(e.target.value)) {
      setError('Wrong email format.');
    } else {
      setError(null);
    }
  };

  return (
    <div className="">
      <input type="text" onChange={handleChange} onBlur={handleBlur} value={email}/>
      {error && (
        <div>{error}</div>
      )}
    </div>
  );
}

EmailValidation.propTypes = {};
