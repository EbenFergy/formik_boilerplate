import React from "react";
import { Field, ErrorMessage } from "formik";
import { ErrorStyle, InputStyle } from "./FormStyle";

const Textarea = ({ name, label, ...rest }) => {
  return (
    <InputStyle>
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={ErrorStyle} />
    </InputStyle>
  );
};

export default Textarea;
