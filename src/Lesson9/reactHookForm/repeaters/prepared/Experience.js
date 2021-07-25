import React from 'react';
import PropTypes from 'prop-types';
import { useFieldArray } from "react-hook-form";
import Box from '@material-ui/core/Box';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export function Experience({ control, register, errors }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience"
  });

  return (
    <Box className="">
      {fields.map((f, i) => (
        <Box key={f.id}>
          <TextField
            inputProps={register(`experience.${i}.place`, { required: 'This field is required' })}
            label="Place"
            error={!!(errors.experience?.[i]?.place)}
            helperText={errors.experience?.[i]?.place?.message}
          />
          <TextField
            inputProps={register(`experience.${i}.title`, { required: 'This field is required' })}
            label="Title"
            error={!!(errors.experience?.[i]?.title)}
            helperText={errors.experience?.[i]?.title?.message}
          />
          <Button onClick={() => remove(i)}>Delete item</Button>
        </Box>
      ))}
      <Box mt={1}>
        <Button onClick={() => append({
          place: '',
          title: '',
        })}>Add item</Button>
      </Box>
    </Box>
  );
}

Experience.propTypes = {};
