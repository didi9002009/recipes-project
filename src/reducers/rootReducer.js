import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import ingredientsReducer from './ingredientsReducer';
import shoppingReducer from './shoppingReducer';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientsReducer,
  shopping: shoppingReducer,
  app: appReducer,
});

export default rootReducer;