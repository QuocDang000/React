import React from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";
import QuantityField from "./Form/QuantityField";
import { useFormik } from "formik";

AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit = null }) {
  const formik = useFormik({
    initialValues: {
      quantity: 1,
    },

    validationSchema: Yup.object({
      quantity: Yup.number()
        .required("Please enter quantity")
        .min(1, "Please enter at least 1")
        .typeError("Please enter a number"),
    }),

    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <QuantityField formik={formik} name='quantity' label='Quantity' />
    </form>
  );
}

export default AddToCartForm;
