import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { 
  JustifiedRow,
  StyledIngredientsMain,
  StyledCurrentIngredientsSection,
  StyledQuickAddIngredientsSection,
  StyledIngredientListItem,
} from './styles/Views';
import { openModal } from '../actions/app';
import { toggleDone, updatePantry } from '../actions/shopping';

const ShoppingList = ({ openModal, active, shopping, toggleDone, updatePantry }) => active && (
  <StyledIngredientsMain>
    <StyledCurrentIngredientsSection>
      <JustifiedRow>
        <h1>Shopping List</h1>
        <button onClick={() => openModal(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <button onClick={updatePantry}>Update Pantry</button>
      </JustifiedRow>
      <ul>
        {shopping.map(item => (
          <StyledIngredientListItem key={item.id} checked={item.done} alignLeft>
            <input type="checkbox" checked={item.done} onChange={(e) => toggleDone(item)} />
            {item.label}
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
    shopping: state.shopping,
  }
}

export default connect(mapStateToProps, { openModal, toggleDone, updatePantry })(ShoppingList);
