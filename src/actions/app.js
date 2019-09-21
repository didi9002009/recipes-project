import { Actions } from './actions';

export const openModal = (modalType) => {
  return (dispatch) => {
    switch (modalType) {
      case "recipe":
        dispatch({ type: Actions.SET_RECIPE_MODAL_OPEN });
        break;
      case "ingredient":
        dispatch({ type: Actions.SET_INGREDIENT_MODAL_OPEN });
        break;
      case "listIngredient":
        dispatch({ type: Actions.SET_LIST_INGREDIENT_MODAL_OPEN });
        break;
      default:
        return null;
    }
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

export const setActiveRecipe = (id) => {
  return (dispatch, getState) => {
    const payload = getState().recipes.find(recipe => recipe.id === id);
    dispatch({ type: Actions.SET_ACTIVE_RECIPE, payload });
    dispatch({ type: Actions.SET_TAB_INDEX, payload: 5 });
  }
}