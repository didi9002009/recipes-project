import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import AddRecipe from './components/AddRecipe';
import AddIngredient from './components/AddIngredient';
import Ingredients from './components/Ingredients';
import Recipes from './components/Recipes';
import Home from './components/Home';
import { HomeContainer } from './components/styles/Views';

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

class App extends Component {
  state = {
    targetIngredient: null,
  }

  render() {
    return (
      <>
      <BindKeyboardSwipeableViews enableMouseEvents animateHeight>
        <HomeContainer key={0}>
          <Home />
        </HomeContainer>
        <div key={1} style={{...styles.slide, ...styles.slide1}}>
          <Ingredients setTargetIngredient={this.setTargetIngredient} />
        </div>
        <div key={2} style={{...styles.slide, ...styles.slide2}}>
          <Recipes />
        </div>
        <div key={3} style={{...styles.slide, ...styles.slide3}}>
          <AddIngredient ingredientToEdit={this.state.targetIngredient} resetEditIngredient={this.resetEditIngredient} />
          <AddRecipe />
        </div>
      </BindKeyboardSwipeableViews>
      </>
    );
  }
}

const styles = {
  slide: {
    padding: '15em',
    minHeight: '100vh',
    backgroundColor: '#F3C677',
  },
  slide1: {
    background: 'red',
  },
  slide2: {
    background: 'yellow',
  },
  slide3: {
    background: 'green',
  }
}

export default App;
