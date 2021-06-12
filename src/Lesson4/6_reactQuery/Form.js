import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import { useLogger } from "../../utils/logger";

export function Form(props) {
  const log = useLogger("Form", { level: 3, color: 'green' });
  log("render started");

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      login: "facebook",
      repo: "react"
    }
  });

  const onSubmit = (values) => {
    log("onSubmit", values);
    props.handleSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div>
        <div><b>Login:</b></div>
        <input type="text" {...register("login", { required: "Please, enter the login" })}/>
        {errors.login && (
          <div style={{color: "red"}}>{errors.login.message}</div>
        )}
      </div>
      <div>
        <div><b>Repo:</b></div>
        <input type="text" {...register("repo", { required: "Please, the repository name" })}/>
        {errors.repo && (
          <div style={{color: "red"}}>{errors.repo.message}</div>
        )}
      </div>
      <button>Get repo info</button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func,
};
