import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class SignupForm extends Component {

  validate = (values) => {
    let errors = {};
    if (!values.email) errors.email = "Email is required";
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) errors.email = "Invalid email address";
    if (!values.password) errors.password = "Password is required";
    if (values.password !== values.confirmPassword) errors.confirmPassword = "Passwords must match";
    return errors;
  }

  render() {
    return (
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validate={values => this.validate(values)}
        onSubmit={(values, { setSubmitting }) => {
          this.props.createUser(values.email, values.password);
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
  
            <label htmlFor="confirmPassword">Confirm password:</label><br />
            <Field type="password" name="confirmPassword" /><br />
            <ErrorMessage name="confirmPassword" component="div" />
  
            <button type="submit" disabled={isSubmitting}>Create Account</button>
          </Form>
        )}
      </Formik>
    )
  }
}

export default SignupForm;