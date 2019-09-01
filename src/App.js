import React, { Component } from 'react';
import { Router, Link } from '@reach/router';
import Dashboard from './Dashboard';
import Meals from './Meals';

class App extends Component {

  render() {
    return (
      <Router>
        <Dashboard path="/" />
        <Meals path="meals" />
      </Router>
    );
  }
}

export default App;
