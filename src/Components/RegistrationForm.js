import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import * as Yup from "yup";
import { Button, FormCont } from "./FormStyle";

const RegistrationForm = () => {
  const radioOptions = [
    { key: "email", value: "emailChecked" },
    { key: "telephone", value: "telephoneChecked" },
  ];

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    radio: "",
    telephone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Enter valid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("required"),
    radio: Yup.string().required("Pick an option"),
    telephone: Yup.string().when("radio", {
      is: "telephoneChecked",
      then: Yup.string().required("required"),
    }),
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
              />
              <FormikControl
                control="input"
                name="password"
                label="Password"
                placeholder="password"
                type="password"
              />
              <FormikControl
                control="input"
                name="confirmPassword"
                label="Confirm Password"
                placeholder="confirm password"
                type="password"
              />

              <FormikControl
                control="radio"
                name="radio"
                label="Mode of Contact"
                options={radioOptions}
              />

              {formik.values.radio === "telephoneChecked" && (
                <FormikControl
                  control="input"
                  name="telephone"
                  label="Telephone number"
                  placeholder="telephone"
                />
              )}

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

export default RegistrationForm;
