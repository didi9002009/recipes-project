import React, { Component } from 'react';
import db from '../firebase';
import { RecipesContainer, RecipesList } from './styles/Views';
import { AddButton } from './styles/Buttons';
import { CardsContainer } from './styles/Cards';
import Card from './Card'

class Recipes extends Component {
  state = {
    recipes: [],
  }

  componentDidMount = () => {
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
      })
    })
  }

  render() {
    return (
      <RecipesContainer>
        <RecipesList>
          <h1>My Recipes</h1>
          <CardsContainer>
            { this.state.recipes.map(item => <Card item={item} />)}
          </CardsContainer>
          <AddButton onClick={() => this.props.openModal(true)}>+ Recipe</AddButton>
        </RecipesList>
      </RecipesContainer>
    );
  }
}

export default Recipes;
