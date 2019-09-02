import React, { Component } from 'react';

class SignupForm extends Component {
  state = {
    email: '',
    password: '',
    passwordConfirmation: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.email && this.state.password) {
      this.props.createUser(this.state.email, this.state.password);
    }
  }

  render() {
    return (
      <form>
        <label htmlFor="email">Email:</label><br />
        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} /><br />
        <label htmlFor="password">Password:</label><br />
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/><br />
        <button onClick={this.handleSubmit}>Create my account!</button>
      </form>
    )
  }
}

export default SignupForm;