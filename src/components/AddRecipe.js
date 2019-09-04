import React, { Component } from 'react';
import { db, auth } from '../firebase';
import {
  StyledFormGroup,
  StyledInputGroup,
  StyledLabel,
  StyledSubmitButton,
} from './styles/Forms';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class AddRecipe extends Component {
  state = {
    imageUrl: '',
    largeImageUrl: '',
    recipeToEdit: null,
  }

  componentDidMount = () => {
    if (this.props.recipeToEdit) this.setState({ recipeToEdit: this.props.recipeToEdit });
  }

  processIngredients = ingredients => {
    return ingredients.split(/\r?\n/);
  }

  addOrUpdateRecipe = (formValues) => {
    if (!this.state.recipeToEdit) this.addRecipe(formValues);
    if (this.state.recipeToEdit) this.updateRecipe(this.state.recipeToEdit.id, formValues);
  }

  addRecipe = (formValues) => {
    const { uid } = auth.currentUser;
    const { title, instructions, ingredients } = formValues;
    const { imageUrl, largeImageUrl } = this.state;
    const ingredientsList = this.processIngredients(ingredients);
    console.log('Adding: ', title)
    db.collection('recipes').add({
      title,
      instructions,
      ingredients: ingredientsList,
      uid,
      imageUrl,
      largeImageUrl,
    })
    .then(docRef => {
      console.log('Document written with ID: ', docRef);
      this.props.closeModal();
    })
    .catch(error => console.log('Error adding document: ', error));
  }

  updateRecipe = (id, formValues) => {
    const { uid } = auth.currentUser;
    const { title, instructions, ingredients } = formValues;
    console.log(`Updating ${id}: `, title);
    db.collection('recipes').doc(id).update({
      title,
      instructions,
      ingredients,
      uid,
    })
    .then(() => {
      console.log(`Document ${id} successfully updated!`);
      this.props.closeModal();
    })
    .catch(error => console.log('Error updating: ', error))
  }

  handleImageUpload = async (e) => {
    const { files } = e.target;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'recipes');

    const res = await fetch(process.env.CLOUDINARY_UPLOAD_URL, {
      method: 'POST',
      body: data,
    });
    const file = await res.json();
    this.setState({
      imageUrl: file.secure_url,
      largeImageUrl: file.eager[0].secure_url,
    }, () => console.log('upload complete!'));
  }

  validate = (values) => {
    let errors = {};
    if (!values.title) errors.title = "Title is required";
    if (!values.instructions) errors.instructions = "Instructions are required";
    if (!values.ingredients) errors.ingredients = "Ingredients are required";
    return errors;
  }

  render() {
    const { recipeToEdit } = this.state;
    return (
      <StyledFormGroup>
        <h2>{ recipeToEdit && recipeToEdit.id ? 'Edit' : 'Add' } Recipe</h2>
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
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              <StyledInputGroup>
                <StyledLabel htmlFor="title">Title</StyledLabel>
                <Field type="text" id="title" name="title" />
                <ErrorMessage name="title" component="div" />
              </StyledInputGroup>

              <StyledInputGroup>
                <StyledLabel htmlFor="file">Upload an Image</StyledLabel>
                <Field type="file" id="file" name="file" onChange={(e) => {
                  this.handleImageUpload(e);
                  setFieldValue('file', e.target.value, false);
                }} />
                <ErrorMessage name="file" component="div" />
              </StyledInputGroup>

              <StyledInputGroup>
                <StyledLabel htmlFor="ingredients">Ingredients (on separate lines)</StyledLabel>
                <Field component="textarea" id="ingredients" name="ingredients" rows="3" />
                <ErrorMessage name="ingredients" component="div" />
              </StyledInputGroup>

              <StyledInputGroup>
                <StyledLabel htmlFor="instructions">Instructions</StyledLabel>
                <Field component="textarea" id="instructions" name="instructions" rows="3" />
                <ErrorMessage name="instructions" component="div" />
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

export default AddRecipe;