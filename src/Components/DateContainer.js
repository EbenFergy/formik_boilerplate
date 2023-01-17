import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field, ErrorMessage } from "formik";
import { InputStyle, ErrorStyle } from "./FormStyle";

const DateContainer = ({ label, name, ...rest }) => {
  return (
    <InputStyle>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ field, form }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DatePicker
              {...field}
              {...rest}
              id={name}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
              // set date format
              // dateFormat="mm/dd/yyyy"
              // set minimum date
              // minDate={new Date()}
              // set maximum date in yyyy/mm/dd format
              // maxDate={new Date(2023, 1, 13)}
              // filter days by their indexes, with Sunday as 0
              // filtering Saturdays and Sundays thus would be
              // filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorStyle} />
    </InputStyle>
  );
};

export default DateContainer;
