import { Actions } from '../actions/actions';

const DEFAULT_STATUS = {
  needsMapping: false,
  ingredientToEdit: '',
  recipeToEdit: '',
  isModalOpen: false,
  isRecipeModal: false,
  isIngredientModal: false,
  tabIndex: 0,
  activeRecipe: '',
}

const appReducer = (state=DEFAULT_STATUS, action) => {
  switch (action.type) {
    case Actions.SET_NEEDS_MAPPING_TRUE:
      return {
        ...state,
        needsMapping: true,
      }
    case Actions.SET_NEEDS_MAPPING_FALSE:
      return {
        ...state,
        needsMapping: false,
      };
    case Actions.SET_INGREDIENT_TO_EDIT:
      return {
        ...state,
        ingredientToEdit: action.payload,
      }
    case Actions.RESET_INGREDIENT_TO_EDIT:
      return {
        ...state,
        ingredientToEdit: DEFAULT_STATUS.ingredientToEdit,
      }
    case Actions.SET_INGREDIENT_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: true,
        isIngredientModal: true,
      }
    case Actions.SET_RECIPE_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: true,
        isRecipeModal: true,
      }
    case Actions.SET_MODAL_CLOSED:
      return {
        ...state,
        isModalOpen: false,
        isIngredientModal: false,
        isRecipeModal: false,
      }
    case Actions.SET_TAB_INDEX:
      return {
        ...state,
        tabIndex: action.payload,
      }
    case Actions.RESET_TAB_INDEX:
      return {
        ...state,
        tabIndex: DEFAULT_STATUS.tabIndex,
      }
    default:
      return state;
  }
}

export default appReducer;