import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import Modal from 'react-modal';
import styled from 'styled-components';
import AddRecipe from './components/AddRecipe';
import AddIngredient from './components/AddIngredient';
import Ingredients from './components/Ingredients';
import Recipes from './components/Recipes';
import Home from './components/Home';
import { HomeContainer, IngredientsContainer, RecipesContainer } from './components/styles/Views';
import { CloseButton } from './components/styles/Buttons';

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

class App extends Component {
  state = {
    targetIngredient: null,
    isModalOpen: false,
    isRecipeModal: false,
    isIngredientModal: false,
  }

  setIngredientToEdit = (targetIngredient) => {
    this.setState({
      targetIngredient,
      isModalOpen: true,
      isIngredientModal: true,
    });
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

  render() {
    return (
      <>
      <BindKeyboardSwipeableViews enableMouseEvents animateHeight>
        <HomeContainer key={0}>
          <Home openModal={this.openModal} closeModal={this.closeModal} />
        </HomeContainer>
        <IngredientsContainer key={1}>
          <Ingredients setIngredientToEdit={this.setIngredientToEdit} openModal={this.openModal} />
        </IngredientsContainer>
        <RecipesContainer key={2}>
          <Recipes openModal={this.openModal} />
        </RecipesContainer>
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

export default App;
