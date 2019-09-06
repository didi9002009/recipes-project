import React, { Component } from 'react';
import { Router } from '@reach/router';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Recipe from './pages/Recipe';

class App extends Component {

  render() {
    return (
      <Router>
        <Dashboard exact path="/" />
        <Login path="/login" />
        <Recipe path="/recipes/:recipeId" />
      </Router>
    );
  }
}

export default App;
