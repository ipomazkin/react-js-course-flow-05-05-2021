import React from 'react';
import PropTypes from 'prop-types';
import { Form as WatchForm } from './reactHookForm/watch/prepared/Form';
import { Form as RepeatersForm } from './reactHookForm/repeaters/prepared/Form';
import { Form as ValidationForm } from './reactHookForm/validation/prepared/Form';
import CssBaseline from "@material-ui/core/CssBaseline";
import { EmailValidation } from "./EmailValidation";

export function Lesson9() {
  const handleSubmit = (values) => {
    console.log('-----------------', values);
  };

  return (
    <div className="">
      <CssBaseline />
      {/*<ValidationForm onSubmit={handleSubmit} />*/}
      <ValidationForm />
    </div>
  );
}

Lesson9.propTypes = {};
