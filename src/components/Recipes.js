import React from 'react';
import { connect } from 'react-redux';
import { JustifiedRow, StyledRecipesMain, StyledRecipesSection } from './styles/Views';
import { AddButton } from './styles/Buttons';
import { CardsContainer } from './styles/Cards';
import Card from './Card';
import { openModal } from '../actions/app';

const Recipes = ({ recipes, openModal, active }) => active && (
  <StyledRecipesMain>
    <StyledRecipesSection>
      <JustifiedRow>
        <h1>Recipes</h1>
        <AddButton onClick={() => openModal('recipe')}>
          Add Recipe
        </AddButton>
      </JustifiedRow>
      <CardsContainer>
        { recipes.map(item => <Card item={item} key={`recipes-${item.id}`} />)}
      </CardsContainer>
    </StyledRecipesSection>
  </StyledRecipesMain>
);

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  }
}

export default connect(mapStateToProps, { openModal })(Recipes);
