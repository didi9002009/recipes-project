import React, { Component } from 'react';
import { Router } from '@reach/router';
import { connect } from 'react-redux';
import { withAuth } from './hocs/withAuth';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { getRecipes, mapRecipes } from './actions/recipes';
import { getIngredients } from './actions/ingredients';
import { getShoppingList } from './actions/shopping';

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
    return (
      <Router>
        <Dashboard exact path="/" />
        <Login path="/login" />
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  ingredients: state.ingredients,
  recipes: state.recipes,
  shopping: state.shopping,
  app: state.app,
});

export default connect(mapStateToProps, {
  getRecipes,
  getIngredients,
  mapRecipes,
  getShoppingList,
})(withAuth(App));
