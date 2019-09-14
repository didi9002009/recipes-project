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

const ShoppingList = ({ openModal, active, shopping }) => active && (
  <StyledIngredientsMain>
    <StyledCurrentIngredientsSection>
      <JustifiedRow>
        <h1>Shopping List</h1>
        <button onClick={() => openModal(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </JustifiedRow>
      <ul>
        {shopping.map(item => (
          <StyledIngredientListItem key={item.id} checked={item.done} alignLeft>
            <input type="checkbox" checked={item.done} onChange={(e) => console.log(e.target.checked, item.id)} />
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

export default connect(mapStateToProps, { openModal })(ShoppingList);
