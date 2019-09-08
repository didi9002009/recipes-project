import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { StyledIngredientsMain, StyledCurrentIngredientsSection, StyledQuickAddIngredientsSection, JustifiedRow, StyledIngredientListItem, AlignedRight } from './styles/Views';

const Ingredients = ({
  ingredients,
  openModal,
  updateIngredientMeasurement,
  editIngredient,
  deleteIngredient,
  active
}) => active && (
  <StyledIngredientsMain>
    <StyledCurrentIngredientsSection>
      <AlignedRight>
        
      </AlignedRight>
      <JustifiedRow>
        <h1>Pantry</h1>
        <button onClick={() => openModal(false)}>Add Ingredient</button>
      </JustifiedRow>
      <h2>You have {ingredients.length} ingredient{ingredients.length === 1 ? '' : 's'}:</h2>
      <ul>
        { ingredients.map(item => (
          <StyledIngredientListItem key={item.id}>
            <div>
              <span className="ingredient__label">{item.label} &middot; <button onClick={() => editIngredient(item.id)}>Edit</button></span>
              <span className="ingredient__measurement">
                {item.measurement} {item.unit} &middot; 
                <button onClick={() => updateIngredientMeasurement(item, false)}>-</button> 
                <button onClick={() => updateIngredientMeasurement(item)}>+</button>
              </span>
            </div>
            <button onClick={() => deleteIngredient(item.id)}>Delete</button>
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

export default Ingredients;
