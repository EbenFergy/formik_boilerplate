import React from "react";
import { Field, ErrorMessage } from "formik";
import { InputStyle, ErrorStyle } from "./FormStyle";

const CheckBox = ({ label, name, options, ...rest }) => {
  return (
    <InputStyle>
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <div key={option.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorStyle} />
    </InputStyle>
  );
};

export default CheckBox;
