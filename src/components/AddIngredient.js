import React, { Component } from 'react';
import { db, auth } from '../firebase';
import { StyledFormGroup, StyledInputGroup, StyledLabel, StyledSubmitButton } from './styles/Forms';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class AddIngredient extends Component {
  state = {
    ingredientToEdit: null,
  }

  componentDidMount = () => {
    if (this.props.ingredientToEdit) this.setState({ ingredientToEdit: this.props.ingredientToEdit });
  }

  addOrUpdateIngredient = (formValues) => {
    if (!this.state.ingredientToEdit) this.addIngredient(formValues);
    if (this.state.ingredientToEdit) this.updateIngredient(this.state.ingredientToEdit.id, formValues);
  }

  addIngredient = (formValues) => {
    const { uid } = auth.currentUser;
    const { label, measurement, unit } = formValues;
    console.log('Adding: ', label, measurement, unit)
    db.collection('ingredients').add({
      label,
      measurement,
      unit,
      uid
    })
    .then(docRef => {
      console.log('Document written with ID: ', docRef);
      this.props.closeModal();
    })
    .catch(error => console.log('Error adding document: ', error));
  }

  updateIngredient = (id, formValues) => {
    const { uid } = auth.currentUser;
    const { label, measurement, unit } = formValues;
    console.log(`Updating ${id}: `, label, measurement, unit);
    db.collection('ingredients').doc(id).update({
      label,
      measurement,
      unit,
      uid
    })
    .then(() => {
      console.log(`Document ${id} successfully updated!`);
      this.props.closeModal();
      this.props.resetEditIngredient();
    })
    .catch(error => console.log('Error updating: ', error))
  }

  validate = (values) => {
    let errors = {};
    if (!values.label) errors.label = "Name is required";
    if (!values.measurement) errors.measurement = "Measurement is required";
    if (!values.unit) errors.unit = "Unit is required";
    return errors;
  }

  render() {
    const { ingredientToEdit } = this.state;
    return (
      <StyledFormGroup>
        <h2>{ingredientToEdit && ingredientToEdit.id ? 'Edit' : 'Add' } Ingredient</h2>
        <Formik
          initialValues={{
            label: ingredientToEdit && ingredientToEdit.label ? ingredientToEdit.label : '',
            measurement: ingredientToEdit && ingredientToEdit.measurement ? ingredientToEdit.measurement : '',
            unit: ingredientToEdit && ingredientToEdit.unit ? ingredientToEdit.unit : '',
          }}
          enableReinitialize
          validate={values => this.validate(values)}
          onSubmit={(values, { setSubmitting }) => {
            this.addOrUpdateIngredient(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <StyledInputGroup>
                <StyledLabel htmlFor="label">Name</StyledLabel>
                <Field type="text" id="label" name="label" />
                <ErrorMessage name="label" component="div" />
              </StyledInputGroup>

              <StyledInputGroup half>
                <StyledLabel htmlFor="measurement">Amount</StyledLabel>
                <Field type="number" id="measurement" name="measurement" />
                <ErrorMessage name="measurement" component="div" />
              </StyledInputGroup>

              <StyledInputGroup half second>
                <StyledLabel htmlFor="unit">Unit</StyledLabel>
                <Field type="text" id="unit" name="unit" />
                <ErrorMessage name="unit" component="div" />
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

export default AddIngredient;
