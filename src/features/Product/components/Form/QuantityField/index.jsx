import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, FormControl, FormHelperText, IconButton, OutlinedInput } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import useStyles from "./style.ts";

QuantityField.propTypes = {
  formik: PropTypes.object,
  name: PropTypes.string,
};

function QuantityField({ formik, name, label }) {
  const { classes } = useStyles();
  const [value, setValue] = useState(formik.values.quantity);
  formik.values.quantity = value;

  const handleIncrement = () => {
    setValue(Number.parseInt(value + 1));
  };

  const handleDecrement = () => {
    setValue(Number.parseInt(value - 1));
  };

  return (
    <FormControl className={classes.root} margin='normal' variant='outlined'>
      <Box>
        <IconButton onClick={handleDecrement}>
          <RemoveCircleOutlineIcon />
        </IconButton>

        <OutlinedInput
          className={classes.outlinedInput}
          readOnly={true}
          id={name}
          type='number'
          label={formik.label}
          disabled={formik.disabled}
          value={value}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <IconButton onClick={handleIncrement}>
          <AddCircleOutlineIcon />
        </IconButton>

        {formik.touched.quantity && formik.errors.quantity ? (
          <FormHelperText>{formik.errors.quantity}</FormHelperText>
        ) : null}

        <Button className={classes.button} type='submit' variant='contained'>
          Add to cart
        </Button>
      </Box>
    </FormControl>
  );
}

export default QuantityField;
