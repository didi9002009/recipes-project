import React, { Component } from 'react';
import db from '../firebase';

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
      <div className="add-recipe">
        <h2>Add Recipe</h2>
        <label htmlFor="title">
          Title:
          <input type="text" id="title" name="title" onChange={this.handleInputChange} value={this.state.recipeToAdd.title} /><br />
        </label>
        <label htmlFor="ingredients">
          Ingredients (on separate lines):<br />
          <textarea id="ingredients" name="ingredients" onChange={this.handleInputChange} value={this.state.recipeToAdd.ingredients}></textarea><br />
        </label>
        <label htmlFor="instructions">
          Instructions:<br />
          <textarea id="instructions" name="instructions" onChange={this.handleInputChange} value={this.state.recipeToAdd.instructions}></textarea><br />
        </label>
        <button onClick={this.state.recipeToAdd.id ? () => this.updateRecipe(this.state.recipeToAdd.id) : this.addRecipe}>Save</button>
      </div>
    )
  }
}

export default AddRecipe;