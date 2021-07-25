import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core";
import { Experience } from "./Experience";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    padding: theme.spacing(3),
  },
  cont: {
    margin: 'auto',
  },
  input: {
    width: '100%',
  },
  inputCont: {
    marginBottom: theme.spacing(2),
  }
}));

const experienceTemplate = {
  place: '',
  title: '',
};

export function Form({ onSubmit }) {
  const classes = useStyles();
  const { register, watch, handleSubmit, formState: { errors }, control } = useForm({
    defaultValues: {
      firstName: 'John',
      lastName: 'Doe',
      experience: [
        {...experienceTemplate,},
        {...experienceTemplate,},
      ],
    }
  });

  const firstName = watch('firstName');
  const lastName = watch('lastName');
  const subscribe = watch('subscribe');
  const isShowMessage = firstName.length || lastName.length;

  return (
    <Grid className={classes.root} container>
      <Grid className={classes.cont} item xs={4}>
        <Card>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent>
              <Box className={classes.inputCont}>
                <TextField
                  className={classes.input}
                  label="First Name"
                  inputProps={register('firstName')}
                />
              </Box>
              <Box className={classes.inputCont}>
                <TextField
                  className={classes.input}
                  label="Last Name"
                  inputProps={register('lastName')}
                />
              </Box>
              <Box className={classes.inputCont}>
                <Typography variant="h5">Experience</Typography>
                <Experience register={register} control={control} errors={errors} />
              </Box>
              <Box className={classes.inputCont}>
                <FormControlLabel
                  control={<Checkbox name="subscribe" checked={!!subscribe} inputProps={register('subscribe')} />}
                  label="Subscribe"
                />
              </Box>
              {subscribe && (
                <Box className={classes.inputCont}>
                  <TextField
                    type="email"
                    className={classes.input}
                    label="Email"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    inputProps={register('email', { required: 'This field is required.' })}
                  />
                </Box>
              )}
              {isShowMessage && (
                <Box className={classes.inputCont}>
                  <Typography>
                    Dear, {[firstName, lastName].filter(l => l.length).join(' ')}<br />
                    Bla-bla-bla
                  </Typography>
                </Box>
              )}
            </CardContent>
            <CardActions>
              <Button type="submit">Submit</Button>
            </CardActions>
          </form>
        </Card>
      </Grid>
    </Grid>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
