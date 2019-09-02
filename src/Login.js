import React, { Component } from 'react';
import { auth } from './firebase';
import { withAuth } from './withAuth';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  doCreateUserWithEmailAndPassword = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password)
    .catch(error => console.log(error));
  }

  doSignInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => auth.signOut();

  doPasswordReset = email => auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    auth.currentUser.updatePassword(password);

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.email && this.state.password) {
      this.doCreateUserWithEmailAndPassword(this.state.email, this.state.password);
    }
  }

  render() {
    return (
      <>
        <h1>Login</h1>
        <form>
          <label htmlFor="email">Email:</label><br />
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} /><br />
          <label htmlFor="password">Password:</label><br />
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/><br />
          <button onClick={this.handleSubmit}>Create my account!</button>
        </form>
      </>
    );
  }
}

export default withAuth(Login);

// TODO : Create withAuth hoc to observe user, redirect to login if signed out, redirect to dashboard if signed in