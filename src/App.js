import React, { Component } from 'react';
import AddRecipe from './components/AddRecipe';
import AddIngredient from './components/AddIngredient';
import Ingredients from './components/Ingredients';
import Recipes from './components/Recipes';

class App extends Component {
  state = {
    targetIngredient: null,
  }

  render() {
    return (
      <>
      <Ingredients setTargetIngredient={this.setTargetIngredient} />
      <Recipes />
      <AddIngredient ingredientToEdit={this.state.targetIngredient} resetEditIngredient={this.resetEditIngredient} />
      <AddRecipe />
      </>
    );
  }
}

export default App;
