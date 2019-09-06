import React, { Component } from 'react';
import { navigate } from '@reach/router';
import { auth } from '../firebase';

export const withAuth = ProtectedComponent => {
  return class AuthComponent extends Component {
    state = {
      userId: null,
    }

    componentDidMount = () => {
      auth.onAuthStateChanged(user => {
        if (user) {
          this.setState({
            userId: user.uid,
          }, () => {
            if (this.props.path === 'login') {
              navigate('/');
            }
          });
        } else {
          this.setState({
            userId: null,
          }, () => navigate('/login'));
        }
      });
    }

    render() {
      const isLoginPage = this.props.path === 'login';
      const isLoggedIn = !!this.state.userId;
      if (isLoginPage && !isLoggedIn) return <ProtectedComponent {...this.props} />
      if (!isLoginPage && isLoggedIn) return <ProtectedComponent {...this.props} userId={this.state.userId} />
      return null;
    }
  }
}