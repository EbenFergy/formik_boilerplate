import React from "react";
import { Field, ErrorMessage } from "formik";
import { ErrorStyle, InputStyle } from "./Form/FormStyle";

const Input = ({ name, label, ...rest }) => {
  return (
    <InputStyle>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={ErrorStyle} />
    </InputStyle>
  );
};

export default Input;
