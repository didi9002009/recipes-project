import React, { Component } from 'react';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import Nav from '../components/Nav';
import Ingredients from '../components/Ingredients';
import Recipes from '../components/Recipes';
import Home from '../components/Home';
import Meals from '../components/Meals';
import ShoppingList from '../components/ShoppingList';
import FormModal from '../components/FormModal';
import Recipe from './Recipe';
import { setTabIndex } from '../actions/app';

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

class Dashboard extends Component {

  render() {
    const { setTabIndex, app } = this.props;
    const { tabIndex, isModalOpen } = app;
    return (
      <>
      <Nav handleChange={setTabIndex} index={tabIndex} isHidden={isModalOpen} />
      
      <BindKeyboardSwipeableViews enableMouseEvents animateHeight index={tabIndex} onChangeIndex={setTabIndex}>
        <Home active={tabIndex === 0} key={0} />
        <Ingredients active={tabIndex === 1} key={1} />
        <Recipes active={tabIndex === 2} key={2} />
        <Meals active={tabIndex === 3} key={3} />
        <ShoppingList active={tabIndex === 4} key={4} />
        <Recipe active={tabIndex === 5} key={5} />
      </BindKeyboardSwipeableViews>

      <FormModal />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app,
  }
}

export default connect(mapStateToProps, { setTabIndex })(Dashboard);