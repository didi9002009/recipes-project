import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import ingredientsReducer from './ingredientsReducer';
import shoppingReducer from './shoppingReducer';
import statusReducer from './statusReducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientsReducer,
  shopping: shoppingReducer,
  status: statusReducer,
});

export default rootReducer;