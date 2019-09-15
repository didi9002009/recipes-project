import React, { Component } from 'react';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import Modal from 'react-modal';
import styled from 'styled-components';
import AddRecipe from '../components/AddRecipe';
import AddIngredient from '../components/AddIngredient';
import Ingredients from '../components/Ingredients';
import Recipes from '../components/Recipes';
import Home from '../components/Home';
import { CloseButton } from '../components/styles/Buttons';
import Nav from '../components/Nav';
import Meals from '../components/Meals';
import ShoppingList from '../components/ShoppingList';
import { openModal, closeModal, setTabIndex } from '../actions/app';

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

Modal.setAppElement('#root');

const StyledModal = styled(Modal)`
  background: var(--tea);
  border: none;
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: ${props => props.scrollable ? 'flex-start' : 'center'};
  animation: pop-up 200ms;
  z-index: 10000;
  &:focus {
    outline: none;
  }
`;

class Dashboard extends Component {

  render() {
    const { closeModal, setTabIndex, app } = this.props;
    const { tabIndex, isModalOpen, isRecipeModal, isIngredientModal } = app;
    return (
      <>
      <BindKeyboardSwipeableViews enableMouseEvents animateHeight index={tabIndex} onChangeIndex={setTabIndex}>
        <Home active={tabIndex === 0} key={0} />
        <Ingredients active={tabIndex === 1} key={1} />
        <Recipes active={tabIndex === 2} key={2} />
        <Meals active={tabIndex === 3} key={3} />
        <ShoppingList active={tabIndex === 4} key={4} />
      </BindKeyboardSwipeableViews>

      <StyledModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        scrollable={isRecipeModal}
      >
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        { isRecipeModal && <AddRecipe closeModal={closeModal} />}
        { isIngredientModal && <AddIngredient closeModal={closeModal} />}
      </StyledModal>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app,
  }
}

export default connect(mapStateToProps, { openModal, closeModal, setTabIndex })(Dashboard);