import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Button, FormCont } from "./FormStyle";

const FormikContainer = () => {
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Email required"),
    description: Yup.string().required("Please type in a description"),
    selectOption: Yup.string().required("Please select an option"),
    radioOption: Yup.string().required("Please pick an option"),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  const selectOptions = [
    { key: "Select an option", value: "" },
    {
      key: "Boy",
      value: "boy",
    },
    {
      key: "Girl",
      value: "girl",
    },
    {
      key: "Man",
      value: "man",
    },
    {
      key: "Woman",
      value: "woman",
    },
  ];

  const radioOptions = [
    { key: "Dog", value: "dog" },
    { key: "Cat", value: "cat" },
    { key: "Rabbit", value: "rabbit" },
  ];
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormCont>
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

            <FormikControl
              control="select"
              name="selectOption"
              label="Choose from list"
              options={selectOptions}
            />

            <FormikControl
              control="radio"
              name="radioOption"
              label="Pick one"
              options={radioOptions}
            />

            <Button type="submit">Submit</Button>
          </FormCont>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
