import React, { Component } from 'react';
import { Router } from '@reach/router';
import Dashboard from './Dashboard';
import Login from './Login';

class App extends Component {

  render() {
    return (
      <Router>
        <Dashboard path="/" />
        <Login path="login" />
      </Router>
    );
  }
}

export default App;
