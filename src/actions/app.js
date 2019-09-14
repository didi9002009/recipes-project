import { Actions } from './actions';

export const openModal = (isRecipe=true) => {
  return (dispatch) => {
    dispatch({ type: isRecipe ? Actions.SET_RECIPE_MODAL_OPEN : Actions.SET_INGREDIENT_MODAL_OPEN });
  }
}

export const closeModal = () => {
  return (dispatch) => {
    dispatch({ type: Actions.SET_MODAL_CLOSED });
  }
}

export const setTabIndex = (index) => {
  return (dispatch) => {
    dispatch({ type: Actions.SET_TAB_INDEX, payload: index });
  }
}

export const resetTabIndex = () => {
  return (dispatch) => {
    dispatch({ type: Actions.RESET_TAB_INDEX });
  }
}