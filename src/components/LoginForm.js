import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class LoginForm extends Component {

  validate = (values) => {
    let errors = {};
    if (!values.email) errors.email = "Email is required";
    if (!values.password) errors.password = "Password is required";
    return errors;
  }

  render() {
    return (
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => this.validate(values)}
        onSubmit={(values, { setSubmitting }) => {
          this.props.signIn(values.email, values.password);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="email">Email:</label><br />
            <Field type="email" name="email" /><br />
            <ErrorMessage name="email" component="div" />
            <label htmlFor="password">Password:</label><br />
            <Field type="password" name="password" /><br />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>Log In</button>
          </Form>
        )}
      </Formik>
    )
  }
}

export default LoginForm;