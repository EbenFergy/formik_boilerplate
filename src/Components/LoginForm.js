import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import * as Yup from "yup";
import { Button, FormCont } from "./FormStyle";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Enter valid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm({ values: "" });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <FormCont>
              <FormikControl
                control="input"
                name="email"
                label="Email"
                type="email"
                placeholder="email"
                value={formik.values.email}
              />
              <FormikControl
                control="input"
                name="password"
                label="Password"
                placeholder="password"
                value={formik.values.password}
              />

              <Button type="submit" disabled={!formik.isValid}>
                Submit
              </Button>
            </FormCont>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
