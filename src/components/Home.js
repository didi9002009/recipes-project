import React, { Component } from 'react';
import { HomeButton } from './styles/Buttons';
import { HomeContainer } from './styles/Views';

class Home extends Component {

  render() {
    return (
      <HomeContainer>
        <div>
          <h1>Welcome!</h1>
          <HomeButton onClick={() => this.props.openModal(true)}>+ Recipe</HomeButton><br />
          <HomeButton onClick={() => this.props.openModal(false)}>+ Ingredient</HomeButton><br />
          <HomeButton blue>What Should I Make?</HomeButton><br />
          <p>(Or swipe or key left or right for more...)</p>
        </div>
      </HomeContainer>
    );
  }
}

export default Home;
