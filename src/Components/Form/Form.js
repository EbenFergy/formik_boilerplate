import React from "react";
import { useFormik } from "formik";
import Button from "../Button";
import FormStyle from "./FormStyle";

const Form = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log("values on submit", values);
  };

  const validate = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "email is required";
    }
    if (!values.password) {
      errors.password = "password field is required";
    }

    return errors;
  };

  const touched = {};

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
    touched,
  });

  console.log("touched", formik.touched);

  return (
    <div className="formCont">
      <FormStyle onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="error">{formik.errors.name}</div>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="error">{formik.errors.email}</div>
        )}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="error">{formik.errors.password}</div>
        )}

        <Button type="submit">Submit</Button>
      </FormStyle>
    </div>
  );
};

export default Form;
