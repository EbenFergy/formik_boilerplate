import React from "react";
import { Field, ErrorMessage } from "formik";
import { ErrorStyle, InputStyle } from "./FormStyle";

const Select = ({ name, label, options, ...rest }) => {
  return (
    <InputStyle>
      <label htmlFor={name}> {label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => (
          <option key={option.key} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={ErrorStyle} />
    </InputStyle>
  );
};

export default Select;
