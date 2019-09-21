import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyledFormGroup, StyledInputGroup, StyledLabel, StyledSubmitButton } from './styles/Forms';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { createListIngredient } from '../actions/shopping';

class AddListIngredient extends Component {

  validate = (values) => {
    let errors = {};
    if (!values.label) errors.label = "Name is required";
    if (!values.measurement) errors.measurement = "Measurement is required";
    if (values.measurement === 0) errors.measurement = "Measurement must be more than zero";
    if (!values.unit) errors.unit = "Unit is required";
    return errors;
  }

  render() {
    return (
      <StyledFormGroup>
        <h1>Add Item to Shopping List</h1>
        <Formik
          initialValues={{
            label: '',
            measurement: '',
            unit: '',
          }}
          enableReinitialize
          validate={values => this.validate(values)}
          onSubmit={(values, { setSubmitting }) => {
            this.props.createListIngredient(values);
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <StyledInputGroup>
                <StyledLabel htmlFor="label">Name</StyledLabel>
                <Field type="text" id="label" name="label" className={errors.label && touched.label ? 'error' : ''} />
                <ErrorMessage name="label" component="div" className="error-msg" />
              </StyledInputGroup>

              <StyledInputGroup half>
                <StyledLabel htmlFor="measurement">Amount</StyledLabel>
                <Field type="number" id="measurement" name="measurement" className={errors.measurement && touched.measurement ? 'error' : '' } />
                <ErrorMessage name="measurement" component="div" className="error-msg" />
              </StyledInputGroup>

              <StyledInputGroup half second>
                <StyledLabel htmlFor="unit">Unit</StyledLabel>
                <Field type="text" id="unit" name="unit" className={errors.unit && touched.unit ? 'error' : '' }/>
                <ErrorMessage name="unit" component="div" className="error-msg" />
              </StyledInputGroup>

              <StyledInputGroup>
                <StyledSubmitButton type="submit" disabled={isSubmitting}>Save</StyledSubmitButton>
              </StyledInputGroup>
            </Form>
          )}
        </Formik>
      </StyledFormGroup>
    );
  }
}

export default connect(null, { createListIngredient })(AddListIngredient);