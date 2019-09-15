import { Actions } from '../actions/actions';

const recipesReducer = (state=[], action) => {
  switch (action.type) {
    case Actions.GET_RECIPES_SUCCESS:
      return action.payload;
    case Actions.MAP_RECIPES_SUCCESS:
      return action.payload;
    case Actions.ADD_RECIPE_SUCCESS:
      return [...state, action.payload];
    case Actions.UPDATE_RECIPE_SUCCESS:
        const updatedState = state.map(item => {
          if (item.id === action.payload.id) {
            item = action.payload
          }
          return item;
        });
        return updatedState;
    case Actions.DELETE_RECIPE_SUCCESS:
        return [...state].filter(item => item.id !== action.payload);
    default:
      return state;
  }
}

export default recipesReducer;