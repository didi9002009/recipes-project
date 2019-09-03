import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import Modal from 'react-modal';
import styled from 'styled-components';
import { db, auth } from '../firebase.js';
import { withAuth } from '../hocs/withAuth';
import AddRecipe from '../components/AddRecipe';
import AddIngredient from '../components/AddIngredient';
import Ingredients from '../components/Ingredients';
import Recipes from '../components/Recipes';
import Home from '../components/Home';
import { CloseButton } from '../components/styles/Buttons';
import Nav from '../components/Nav';
import Meals from '../components/Meals';

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

Modal.setAppElement('#root');

const StyledModal = styled(Modal)`
  border: none;
  position: absolute;
  background-color: #D8315B;
  color: #FFFAFF;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 80vh;
  overflow: scroll;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.3);
  border-radius: 2rem;
  &:focus {
    outline: none;
  }
`;

class Dashboard extends Component {
  state = {
    index: 0,
    targetIngredient: null,
    isModalOpen: false,
    isRecipeModal: false,
    isIngredientModal: false,
    recipes: [],
    ingredients: [],
  }

  componentDidMount = () => {
    const { uid } = auth.currentUser;
    db.collection('ingredients').where("uid", "==", uid).onSnapshot(snapshot => {
      let ingredients = snapshot.docs;
      let newState = [];
      for (let item in ingredients) {
        const ingredient = {
          ...ingredients[item].data(),
          id: ingredients[item].ref.id,
        };
        newState.push(ingredient);
      }
      this.setState({
        ingredients: newState,
      }, () => this.matchIngredients());
    });
    db.collection('recipes').where("uid", "==", uid).onSnapshot(snapshot => {
      let recipes = snapshot.docs;
      let newState = [];
      for (let item in recipes) {
        const recipe = {
          ...recipes[item].data(),
          id: recipes[item].ref.id,
        }
        newState.push(recipe);
      }
      this.setState({
        recipes: newState,
      }, () => this.matchIngredients());
    });
  }

  matchIngredients = () => {
    const ingredientNames = [...this.state.ingredients.map(ing => ing.label.toLowerCase())];
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
      recipe.adjustedRecipeIngredients = adjustedRecipeIngredients;
      recipe.ingredientsNeeded = ingredientsNeeded;
      return recipe;
    });
    this.setState({
      recipes: adjustedRecipes,
    });
  }

  editIngredient = (id) => {
    const targetIngredient = this.state.ingredients.find(item => item.id === id);
    this.setState({
      targetIngredient,
      isModalOpen: true,
      isIngredientModal: true,
    });
  }

  resetEditIngredient = () => {
    this.setState({
      targetIngredient: null,
    });
  }

  deleteIngredient = (id) => {
    db.collection('ingredients').doc(id).delete()
    .then(() => console.log(`Document ${id} successfully deleted!`))
    .catch(error => console.log('Error removing document: ', error));
  }

  updateIngredientMeasurement = (item, inc=true) => {
    const { id, measurement, label, unit } = item;
    const newMeasurement = inc ? parseInt(measurement) + 1 : parseInt(measurement) - 1;
    db.collection('ingredients').doc(id).set({
      measurement: newMeasurement >= 1 ? newMeasurement : 1,
      label,
      unit,
    })
    .then(() => console.log(`Document ${id} successfully updated!`))
    .catch(error => console.log('Error updating: ', error))
  }

  updateIngredient = (item) => {
    const { id, label, measurement, unit } = item;
    db.collection('ingredients').doc(id).set({
      label,
      measurement,
      unit
    })
    .then(() => console.log(`Document ${id} successfully updated!`))
    .catch(error => console.log('Error updating: ', error))
    this.setState({
      ingredientToAdd: {
        label: '',
        measurement: '',
        unit: '',
        id: '',
      }
    })
    this.props.resetEditIngredient();
  }

  openModal = (isRecipe=true) => {
    this.setState({
      isModalOpen: true,
      [isRecipe ? 'isRecipeModal' : 'isIngredientModal']: true,
    });
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false,
      isRecipeModal: false,
      isIngredientModal: false,
      targetIngredient: null,
    })
  }

  signOut = () => auth.signOut();

  handleChange = (_, value) => {
    this.setState({
      index: value,
    })
  }

  handleChangeIndex = (index) => {
    this.setState({
      index,
    })
  }

  render() {
    return (
      <>
      <Nav handleChange={this.handleChange} index={this.state.index} />

      <BindKeyboardSwipeableViews enableMouseEvents animateHeight index={this.state.index} onChangeIndex={this.handleChangeIndex}>
        <Home
          openModal={this.openModal}
          signOut={this.signOut}
          key={0} />
        <Ingredients
          openModal={this.openModal}
          ingredients={this.state.ingredients}
          updateIngredientMeasurement={this.updateIngredientMeasurement}
          editIngredient={this.editIngredient}
          deleteIngredient={this.deleteIngredient}
          key={1} />
        <Recipes
          openModal={this.openModal}
          recipes={this.state.recipes}
          key={2} />
        <Meals
          recipes={this.state.recipes} 
          key={3} />
      </BindKeyboardSwipeableViews>

      <StyledModal
        isOpen={this.state.isModalOpen}
        onRequestClose={this.closeModal}
      >
        <CloseButton onClick={this.closeModal}>&times;</CloseButton>
        { this.state.isRecipeModal && <AddRecipe />}
        { this.state.isIngredientModal && <AddIngredient ingredientToEdit={this.state.targetIngredient} resetEditIngredient={this.resetEditIngredient} />}
      </StyledModal>
      </>
    );
  }
}

export default withAuth(Dashboard);