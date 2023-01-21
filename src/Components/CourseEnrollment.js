import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import * as Yup from "yup";
import { Button, FormCont } from "./FormStyle";

const CourseEnrollment = () => {
  const courseOptions = [
    { key: "React", value: "react" },
    { key: "Vue", value: "vue" },
    { key: "Angular", value: "angular" },
  ];

  const skillsetOptions = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "JavaScript", value: "javascript" },
  ];
  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skillset: [],
    courseDate: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Enter a valid email").required("required"),
    bio: Yup.string().required("Enter a bio"),
    course: Yup.string().required("required"),
    skillset: Yup.array()
      .min(1, "pick at least one skillset")
      .required("required"),
    courseDate: Yup.date().required("Pick a date"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm({ values: "" });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormCont>
              <FormikControl control="input" name="email" label="Email" />
              <FormikControl control="textarea" name="bio" label="Bio" />
              <FormikControl
                control="select"
                name="course"
                label="Course"
                options={courseOptions}
              />
              <FormikControl
                control="checkbox"
                name="skillset"
                label="Skillset"
                options={skillsetOptions}
              />

              <FormikControl
                control="date"
                name="courseDate"
                label="Course Date"
              />

              <Button type="submit">Submit</Button>
            </FormCont>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CourseEnrollment;
