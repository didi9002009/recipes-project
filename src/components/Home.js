import React from 'react';
import { Link } from '@reach/router'
import { HomeButton } from './styles/Buttons';
import { StyledRecipesMain, StyledRecipesSection } from './styles/Views';

const Home = ({ openModal, signOut, active, recipes, ingredients }) => active && (
  <StyledRecipesMain>
    <StyledRecipesSection>
      <h1>Welcome!</h1>
      <h2>Quick Links</h2>
      <div>
        <button onClick={() => openModal(true)}>Add Recipe</button>
        <button onClick={() => openModal(false)}>Add Ingredient</button>
      </div>
      <h2>Recent Activity</h2>
      { recipes.length && <p>The last recipe you added was <Link to={`/recipes/${recipes[recipes.length-1]['id']}`}>{recipes[recipes.length-1]['title']}</Link>.</p> }
      { ingredients.length && <p>The last ingredient you added was {ingredients[ingredients.length-1]['label']}.</p> }
    </StyledRecipesSection>
  </StyledRecipesMain>
);

export default Home;
