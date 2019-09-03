import React, { Component } from 'react';
import { db, auth, storage } from '../firebase';
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
    },
    imageUrl: '',
  }

  processIngredients = ingredients => {
    return ingredients.split(/\r?\n/);
  }

  addRecipe = () => {
    const { uid } = auth.currentUser;
    const { title, instructions, ingredients } = this.state.recipeToAdd;
    const ingredientsList = this.processIngredients(ingredients);
    console.log('Adding: ', title)
    db.collection('recipes').add({
      title,
      instructions,
      ingredients: ingredientsList,
      uid,
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
    const { uid } = auth.currentUser;
    const { title, instructions, ingredients } = this.state.recipeToAdd;
    console.log(`Updating ${id}: `, title);
    db.collection('recipes').doc(id).update({
      title,
      instructions,
      ingredients,
      uid,
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

  handleImageUpload = (event) => {
    const { files } = event.target;
    const file = files[0];
    if (file) {
      storage.ref().child(`images/${file.name}`).put(file)
      .then(snapshot => {
        snapshot.ref.getDownloadURL().then(downloadURL => {
          console.log('File available at', downloadURL);
          this.setState({
            imageUrl: downloadURL,
          });
        })
      })
      .catch(error => console.log(error))
    }
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
        <StyledInputGroup>
          <StyledLabel>Image</StyledLabel>
          <StyledInput 
            type="file"
            id="file"
            name="file"
            onChange={this.handleImageUpload}
          />
        </StyledInputGroup>
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