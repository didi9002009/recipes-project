import { Actions } from '../actions/actions';

const shoppingReducer = (state=[], action) => {
  switch (action.type) {
    case Actions.GET_SHOPPING_LIST_SUCCESS:
      return action.payload;
    case Actions.ADD_LIST_INGREDIENT_SUCCESS:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default shoppingReducer;