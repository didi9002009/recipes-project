import React, { Component } from 'react';
import { HomeButton } from './styles/Buttons';
class Home extends Component {

  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <HomeButton>+ Recipe</HomeButton><br />
        <HomeButton>+ Ingredient</HomeButton><br />
        <HomeButton blue>What Should I Make?</HomeButton><br />
        <p>(Or swipe or key left or right for more...)</p>
      </div>
    );
  }
}

export default Home;
