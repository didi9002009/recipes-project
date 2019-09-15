import React, { Component } from 'react';
import { Router } from '@reach/router';
import { connect } from 'react-redux';
import { withAuth } from './hocs/withAuth';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Recipe from './pages/Recipe';
import Nav from './components/Nav';
import { getRecipes, mapRecipes } from './actions/recipes';
import { getIngredients } from './actions/ingredients';
import { getShoppingList } from './actions/shopping';
import { setTabIndex } from './actions/app';

class App extends Component {

  componentDidMount = () => {
    if (this.props.userId) {
      this.props.getRecipes();
      this.props.getIngredients();
      this.props.getShoppingList();
    }
  }

  componentDidUpdate = () => {
    if (this.props.app.needsMapping) this.props.mapRecipes();
  }

  render() {
    const { setTabIndex, app } = this.props;
    const { tabIndex, isModalOpen } = app;
    return (
      <>
      <Nav handleChange={setTabIndex} index={tabIndex} isHidden={isModalOpen} path={window.location.pathname} />
      <Router>
        <Dashboard path="/" />
        <Login path="login" />
        <Recipe path="recipes/:recipeId" />
      </Router>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ingredients: state.ingredients,
  recipes: state.recipes,
  shopping: state.shopping,
  ingredientToEdit: state.ingredientToEdit,
  app: state.app,
});

export default connect(mapStateToProps, {
  getRecipes,
  getIngredients,
  mapRecipes,
  getShoppingList,
  setTabIndex
})(withAuth(App));
