import React from "react";
import { Form, Field, Formik, ErrorMessage } from "formik";
import userSchema from "../schemas/Validation";
import axios from "axios";

export default function Register() {
  const initialUserData = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values) => {
    const data = await axios.post("http://localhost:5000/users", values);
    console.log(data);
  };

  return (
    <div class="container">
      <Formik
        initialValues={initialUserData}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
        <Form>
          <label>Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" />
          <br />
          <label>Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" />
          <br />
          <label>Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" />
          <br />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}
