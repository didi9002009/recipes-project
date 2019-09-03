import React from 'react';
import { HomeButton } from './styles/Buttons';
import { HomeContainer } from './styles/Views';

const Home = ({ openModal, signOut }) => (
  <HomeContainer>
    <div>
      <h1>Welcome!</h1>
      <HomeButton onClick={() => openModal(true)}>+ Recipe</HomeButton><br />
      <HomeButton onClick={() => openModal(false)}>+ Ingredient</HomeButton><br />
      <HomeButton blue>What Should I Make?</HomeButton><br />
      <HomeButton onClick={signOut}>Log out</HomeButton><br />
      <p>(Or swipe or key left or right for more...)</p>
    </div>
  </HomeContainer>
);

export default Home;
