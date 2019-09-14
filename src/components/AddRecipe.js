import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyledFormGroup,
  StyledInputGroup,
  StyledLabel,
  StyledSubmitButton,
} from './styles/Forms';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { createRecipe, updateRecipe } from '../actions/recipes';

class AddRecipe extends Component {
  state = {
    imageUrl: '',
    largeImageUrl: '',
  }

  addOrUpdateRecipe = (formValues) => {
    const { status, createRecipe, updateRecipe } = this.props;
    const { imageUrl, largeImageUrl } = this.state;
    if (!status.recipeToEdit) createRecipe(formValues, imageUrl, largeImageUrl);
    if (status.recipeToEdit) updateRecipe(status.recipeToEdit.id, formValues);
  }

  handleImageUpload = async (e) => {
    const { files } = e.target;
    if (files && files[0]) {
      const data = new FormData();
      data.append('file', files[0]);
      data.append('upload_preset', 'recipes');
      const res = await fetch(process.env.REACT_APP_CLOUDINARY_UPLOAD_URL, {
        method: 'POST',
        body: data,
      });
      const file = await res.json();
      this.setState({
        imageUrl: file.secure_url,
        largeImageUrl: file.eager[0].secure_url,
      }, () => console.log('upload complete!'));
    }
  }

  validate = (values) => {
    let errors = {};
    if (!values.title) errors.title = "Title is required";
    if (!values.instructions) errors.instructions = "Instructions are required";
    if (!values.ingredients) errors.ingredients = "Ingredients are required";
    return errors;
  }

  render() {
    const { recipeToEdit } = this.props.status;
    return (
      <StyledFormGroup>
        <h1>{ recipeToEdit && recipeToEdit.id ? 'Edit' : 'Add' } Recipe</h1>
        <Formik
          initialValues={{
            title: recipeToEdit && recipeToEdit.title ? recipeToEdit.title : '',
            instructions: recipeToEdit && recipeToEdit.instructions ? recipeToEdit.instructions : '',
            ingredients: recipeToEdit && recipeToEdit.ingredients ? recipeToEdit.ingredients.join("\n") : '',
            file: '',
          }}
          enableReinitialize
          validate={values => this.validate(values)}
          onSubmit={(values, { setSubmitting }) => {
            this.addOrUpdateRecipe(values);
          }}
        >
          {({ isSubmitting, setFieldValue, errors, touched, values }) => (
            <Form>
              <StyledInputGroup>
                <StyledLabel htmlFor="title">Title</StyledLabel>
                <Field type="text" id="title" name="title" className={errors.title && touched.title ? 'error' : ''} />
                <ErrorMessage name="title" component="div" className="error-msg" />
              </StyledInputGroup>

              <StyledInputGroup>
                { this.state.imageUrl && <img src={this.state.imageUrl} alt="Recipe to be uploaded" /> }
                <StyledLabel htmlFor="file" className="file-label">{values.file ? 'Image selected!' : 'Upload an Image'}</StyledLabel>
                <Field type="file" id="file" name="file" accept="image/*" onChange={(e) => {
                  this.handleImageUpload(e);
                  setFieldValue('file', e.target.value, false);
                }} className={errors.file && touched.file ? 'error' : ''}/>
                <ErrorMessage name="file" component="div" className="error-msg" />
              </StyledInputGroup>

              <StyledInputGroup>
                <StyledLabel htmlFor="ingredients">Ingredients (on separate lines)</StyledLabel>
                <Field component="textarea" id="ingredients" name="ingredients" rows="3" className={errors.ingredients && touched.ingredients ? 'error' : ''} />
                <ErrorMessage name="ingredients" component="div" className="error-msg" />
              </StyledInputGroup>

              <StyledInputGroup>
                <StyledLabel htmlFor="instructions">Instructions</StyledLabel>
                <Field component="textarea" id="instructions" name="instructions" rows="3" className={errors.instructions && touched.instructions ? 'error' : ''} />
                <ErrorMessage name="instructions" component="div" className="error-msg" />
              </StyledInputGroup>
              
              <StyledInputGroup>
                <StyledSubmitButton type="submit" disabled={isSubmitting}>Save</StyledSubmitButton>
              </StyledInputGroup>
            </Form>
          )}
        </Formik>
      </StyledFormGroup>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.status,
  }
}

export default connect(mapStateToProps, {
  createRecipe,
  updateRecipe,
})(AddRecipe);