import React from 'react';
import { Link } from '@reach/router'
import { connect } from 'react-redux';
import { HomeButton } from './styles/Buttons';
import { StyledRecipesMain, StyledRecipesSection } from './styles/Views';
import { openModal } from '../actions/app';

const Home = ({ openModal, signOut, active, recipes, ingredients }) => active && (
  <StyledRecipesMain>
    <StyledRecipesSection>
      <h1>Welcome to your Pantry Manager!</h1>
      <h2>Quick Links</h2>
      <div>
        <HomeButton onClick={() => openModal(true)}>Add Recipe</HomeButton>
        <HomeButton onClick={() => openModal(false)}>Add Ingredient</HomeButton>
      </div>
      <h2>Recent Activity</h2>
      { !!recipes.length && <p>The last recipe you added was <Link to={`/recipes/${recipes[recipes.length-1]['id']}`}>{recipes[recipes.length-1]['title']}</Link>.</p> }
      { !!ingredients.length && <p>The last ingredient you added was {ingredients[ingredients.length-1]['label']}.</p> }
    </StyledRecipesSection>
  </StyledRecipesMain>
);

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    ingredients: state.ingredients,
  }
}

export default connect(mapStateToProps, { openModal })(Home);
