import React, { Component } from 'react';
import db from './firebase.js'

class Meals extends Component {
  state = {
    ingredients: [],
    recipes: [],
  }

  componentDidMount = () => {
    db.collection('ingredients').onSnapshot(snapshot => {
      let ingredients = snapshot.docs;
      let newState = [];
      for (let item in ingredients) {
        const ingredient = {
          ...ingredients[item].data(),
          id: ingredients[item].ref.id,
        };
        console.log('ingredient: ', ingredient)
        newState.push(ingredient);
      }
      this.setState({
        ingredients: newState,
      });
    });
    db.collection('recipes').onSnapshot(snapshot => {
      let recipes = snapshot.docs;
      let newState = [];
      for (let item in recipes) {
        const recipe = {
          ...recipes[item].data(),
          id: recipes[item].ref.id,
        }
        console.log('recipe: ', recipe)
        newState.push(recipe);
      }
      this.setState({
        recipes: newState,
      }, () => this.matchIngredients());
    });    
  }

  matchIngredients = () => {
    const ingredientNames = this.state.ingredients.map(ing => ing.label.toLowerCase());
    const adjustedRecipes = [...this.state.recipes];
    adjustedRecipes.map(recipe => {
      const adjustedRecipeIngredients = {};
      const ingredientsNeeded = [];
      let matchCount = 0;
      recipe.ingredients.forEach(item => {
        if (ingredientNames.includes(item.toLowerCase())) {
          adjustedRecipeIngredients[item.toLowerCase()] = true;
          matchCount++;
        } else {
          adjustedRecipeIngredients[item.toLowerCase()] = false;
          ingredientsNeeded.push(item.toLowerCase());
        }
      });
      recipe.matchPercent = matchCount / recipe.ingredients.length;
      recipe.ingredients = adjustedRecipeIngredients;
      recipe.ingredientsNeeded = ingredientsNeeded;
      return recipe;
    });
    this.setState({
      recipes: adjustedRecipes,
    }, () => console.log(this.state));
  }

  render() {
    console.log('rendering!')
    return (
      <>
        <h1>Meals!</h1>
        { this.state.recipes.sort((a, b) => b.matchPercent - a.matchPercent).map(recipe => (
          <p>{recipe.title}, {Math.round(recipe.matchPercent * 100)}% of ingredients in pantry</p>
        ))}
      </>
    );
  }
}

export default Meals;
