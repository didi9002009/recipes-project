import React, { Component } from 'react';
import { auth } from '../firebase';
import { withAuth } from '../hocs/withAuth';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

class Login extends Component {
  state = {
    newUser: false,
  }

  createUser = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password)
    .catch(error => console.log(error));
  }

  signIn = (email, password) => {
    auth.signInWithEmailAndPassword(email, password)
    .catch(error => console.log(error));
  }

  // doSignOut = () => auth.signOut();

  resetPassword = email => {
    auth.sendPasswordResetEmail(email);
  }

  // doPasswordUpdate = password =>
  //   auth.currentUser.updatePassword(password);

  toggleSignup = () => {
    this.setState({
      newUser: !this.state.newUser
    });
  }

  render() {
    return (
      <>
      <h1>{this.state.newUser ? 'Create an Account' : 'Log in'}</h1>
      { !this.state.newUser && <p><button onClick={this.toggleSignup}>Or create a new account</button></p>}
      { this.state.newUser && <p><button onClick={this.toggleSignup}>Or sign in</button></p>}
      { this.state.newUser && <SignupForm createUser={this.createUser} /> }
      { !this.state.newUser && <LoginForm signIn={this.signIn} resetPassword={this.resetPassword} /> }
      </>
    );
  }
}

export default withAuth(Login);