import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import { useLogger } from "../../utils/logger";

export function Form() {
  const log = useLogger("Form", { level: 2, color: 'blue' });
  log("render started");

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (values) => {
    log("onSubmit", values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div>
        <input type="text" {...register("firstName", { required: "Please, enter your name" })}/>
        {errors.firstName && (
          <div style={{color: "red"}}>{errors.firstName.message}</div>
        )}
      </div>
      <div>
        <input type="text" {...register("lastName", { required: "Please, enter your last name" })}/>
        {errors.lastName && (
          <div style={{color: "red"}}>{errors.lastName.message}</div>
        )}
      </div>
      <button>Submit</button>
    </form>
  );
}

Form.propTypes = {};
