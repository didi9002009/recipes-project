import React, { Component } from 'react';
import { Router } from '@reach/router';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

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
