import React from 'react';
import { HomeButton } from './styles/Buttons';
import { HomeContainer } from './styles/Views';

const Home = ({ openModal }) => (
  <HomeContainer>
    <div>
      <h1>Welcome, User!</h1>
      <HomeButton onClick={() => openModal(true)}>+ Recipe</HomeButton><br />
      <HomeButton onClick={() => openModal(false)}>+ Ingredient</HomeButton><br />
      <HomeButton blue>What Should I Make?</HomeButton><br />
      <p>(Or swipe or key left or right for more...)</p>
    </div>
  </HomeContainer>
);

export default Home;
