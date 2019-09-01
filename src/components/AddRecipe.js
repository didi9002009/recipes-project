import React, { Component } from 'react';
import db from '../firebase';
import {
  StyledFormGroup,
  StyledInputGroup,
  StyledInput,
  StyledTextarea,
  StyledLabel,
  StyledSubmitButton,
} from './styles/Forms';

class AddRecipe extends Component {
  state = {
    recipeToAdd: {
      title: '',
      instructions: '',
      ingredients: '',
    }
  }

  processIngredients = ingredients => {
    return ingredients.split(/\r?\n/);
  }

  addRecipe = () => {
    const { title, instructions, ingredients } = this.state.recipeToAdd;
    const ingredientsList = this.processIngredients(ingredients);
    console.log('Adding: ', title)
    db.collection('recipes').add({
      title,
      instructions,
      ingredients: ingredientsList,
    })
    .then(docRef => {
      console.log('Document written with ID: ', docRef);
      this.setState({
        recipeToAdd: {
          title: '',
          instructions: '',
          ingredients: '',
          id: ''
        }
      });
    })
    .catch(error => console.log('Error adding document: ', error));
  }

  updateRecipe = (id) => {
    const { title, instructions, ingredients } = this.state.recipeToAdd;
    console.log(`Updating ${id}: `, title);
    db.collection('recipes').doc(id).set({
      title,
      instructions,
      ingredients,
    })
    .then(() => console.log(`Document ${id} successfully updated!`))
    .catch(error => console.log('Error updating: ', error))
    this.setState({
      recipeToAdd: {
        title: '',
        instructions: '',
        ingredients: [],
      }
    })
  }

  handleInputChange = (event) => {
    this.setState({
      recipeToAdd: {
        ...this.state.recipeToAdd,
        [event.target.name]: event.target.value,
      }
    });
  }

  render() {
    return (
      <StyledFormGroup>
        <h2>Add Recipe</h2>
        <StyledInputGroup>
          <StyledLabel>Title</StyledLabel>
          <StyledInput 
            type="text"
            id="title"
            name="title"
            onChange={this.handleInputChange}
            value={this.state.recipeToAdd.title}
          />
        </StyledInputGroup>
        <StyledInputGroup>
          <StyledLabel>Ingredients (on separate lines)</StyledLabel>
          <StyledTextarea 
            id="ingredients"
            name="ingredients"
            onChange={this.handleInputChange}
            value={this.state.recipeToAdd.ingredients}
            wrap="off"
            rows="3"
          />
        </StyledInputGroup>
        <StyledInputGroup>
          <StyledLabel>Instructions:</StyledLabel>
          <StyledTextarea 
            id="instructions"
            name="instructions"
            onChange={this.handleInputChange}
            value={this.state.recipeToAdd.instructions}
            wrap="off"
            rows="3"
          />
        </StyledInputGroup>
        <StyledInputGroup>
          <StyledSubmitButton
            onClick={this.state.recipeToAdd.id ? () => this.updateRecipe(this.state.recipeToAdd.id) : this.addRecipe}
          >
            Save
          </StyledSubmitButton>
        </StyledInputGroup>
      </StyledFormGroup>
    )
  }
}

export default AddRecipe;