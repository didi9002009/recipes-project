import { db, auth } from '../firebase';
import { Actions } from './actions';
import { matchIngredients, splitIngredients } from '../shared/transformations';

export const getRecipes = () => {
  return (dispatch, getState) => {
    const { uid } = auth.currentUser;
    const { ingredients } = getState();
    db.collection('recipes').where("uid", "==", uid).onSnapshot(snapshot => {
      let recipes = snapshot.docs;
      let payload = [];
      for (let item in recipes) {
        const recipe = {
          ...recipes[item].data(),
          id: recipes[item].ref.id,
        }
        payload.push(recipe);
      }
      payload = matchIngredients(payload, ingredients);
      dispatch({ type: Actions.GET_RECIPES_SUCCESS, payload });
      dispatch({ type: Actions.SET_NEEDS_MAPPING_FALSE });
    });
  }
}

export const mapRecipes = () => {
  return (dispatch, getState) => {
    const { ingredients, recipes } = getState();
    let payload = matchIngredients(recipes, ingredients);
    dispatch({ type: Actions.MAP_RECIPES_SUCCESS, payload });
    dispatch({ type: Actions.SET_NEEDS_MAPPING_FALSE });
  }
}

export const createRecipe = (formValues, imageUrl, largeImageUrl) => {
  return (dispatch) => {
    const { uid } = auth.currentUser;
    const { title, instructions, ingredients } = formValues;
    const ingredientsList = splitIngredients(ingredients);
    const payload = {
      title,
      instructions,
      ingredients: ingredientsList,
      uid,
      imageUrl,
      largeImageUrl
    };
    db.collection('recipes').add(payload)
    .then(docRef => {
      // Unnecessary; Firebase is listening for updates
      // dispatch({ type: Actions.ADD_RECIPE_SUCCESS, payload });
      dispatch({ type: Actions.SET_MODAL_CLOSED });
    })
    .catch(error => console.log('Error adding document: ', error));
  }
}

export const updateRecipe = (id, formValues) => {
  return (dispatch) => {
    const { uid } = auth.currentUser;
    const payload = { ...formValues, uid };
    db.collection('recipes').doc(id).update(payload)
    .then(() => {
      dispatch({ type: Actions.UPDATE_RECIPE_SUCCESS, payload });
      dispatch({ type: Actions.SET_MODAL_CLOSED });
    })
    .catch(error => console.log('Error updating: ', error))
  }
}

// TODO: Add delete recipe