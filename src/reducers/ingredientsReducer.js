import { Actions } from '../actions/actions';

const ingredientsReducer = (state=[], action) => {
  switch (action.type) {
    case Actions.GET_INGREDIENTS_SUCCESS:
      return action.payload;
    case Actions.ADD_INGREDIENT_SUCCESS:
      return [...state, action.payload];
    case Actions.UPDATE_INGREDIENT_SUCCESS:
      const updatedState = state.map(item => {
        if (item.id === action.payload.id) {
          item = action.payload
        }
        return item;
      });
      return updatedState;
    case Actions.DELETE_INGREDIENT_SUCCESS:
      return [...state].filter(item => item.id !== action.payload);
    default:
      return state;
  }
}

export default ingredientsReducer;