import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Button } from "./Form/FormStyle";

const FormikContainer = () => {
  const initialValues = {
    email: "",
    description: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Email required"),
    description: Yup.string().required("Please type in a description"),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            name="email"
            label="Email"
            type="email"
          />
          <FormikControl
            control="textarea"
            name="description"
            label="Description"
          />
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
