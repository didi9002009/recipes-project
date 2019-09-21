import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { AddButton, EditButton, DeleteButton, MathButton } from './styles/Buttons';
import {
  StyledIngredientsMain,
  StyledCurrentIngredientsSection,
  StyledQuickAddIngredientsSection,
  JustifiedRow,
  StyledIngredientListItem,
} from './styles/Views';
import { setIngredientToEdit, updateIngredientMeasurement, deleteIngredient } from '../actions/ingredients';
import { openModal } from '../actions/app';

const Ingredients = ({
  openModal,
  active,
  ingredients,
  setIngredientToEdit,
  updateIngredientMeasurement,
  deleteIngredient,
}) => active && (
  <StyledIngredientsMain>
    <StyledCurrentIngredientsSection>
      <JustifiedRow>
        <h1>Pantry</h1>
        <AddButton onClick={() => openModal('ingredient')}>Add Ingredient</AddButton>
      </JustifiedRow>
      <h2>You have {ingredients.length} ingredient{ingredients.length === 1 ? '' : 's'}:</h2>
      <ul>
        { ingredients.map(item => (
          <StyledIngredientListItem key={item.id}>
            <div>
              <span className="ingredient__label">{item.label} <EditButton onClick={() => setIngredientToEdit(item.id)}>Edit</EditButton></span>
              <span className="ingredient__measurement">
                {item.measurement} {item.unit}
                <MathButton onClick={() => updateIngredientMeasurement(item, false)}><FontAwesomeIcon icon={faMinusCircle} /></MathButton> 
                <MathButton onClick={() => updateIngredientMeasurement(item)}><FontAwesomeIcon icon={faPlusCircle} /></MathButton>
              </span>
            </div>
            <DeleteButton onClick={() => deleteIngredient(item.id)}>Delete</DeleteButton>
          </StyledIngredientListItem>
        ))}
      </ul>
    </StyledCurrentIngredientsSection>
    <StyledQuickAddIngredientsSection>
      <h2>Quick Add</h2>
      <p>Coming soon!</p>
    </StyledQuickAddIngredientsSection>
  </StyledIngredientsMain>
);

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
  }
}

export default connect(mapStateToProps, {
  setIngredientToEdit,
  updateIngredientMeasurement,
  deleteIngredient,
  openModal,
})(Ingredients);
