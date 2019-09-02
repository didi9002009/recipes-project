import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import db from '../firebase';
import { RecipesContainer, RecipesList, JustifiedRow } from './styles/Views';
import { AddButton, PlusButton } from './styles/Buttons';
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
          <JustifiedRow>
            <h1>My Recipes</h1>
            <PlusButton onClick={() => this.props.openModal(true)}>
              <FontAwesomeIcon icon={faPlus} />
            </PlusButton>
          </JustifiedRow>
          <CardsContainer>
            { this.state.recipes.map(item => <Card item={item} />)}
          </CardsContainer>
        </RecipesList>
      </RecipesContainer>
    );
  }
}

export default Recipes;
