import { db, auth } from '../firebase';
import { Actions } from './actions';

export const getIngredients = () => {
  return (dispatch) => {
    const { uid } = auth.currentUser;
    db.collection('ingredients').where("uid", "==", uid).onSnapshot(snapshot => {
      let ingredients = snapshot.docs;
      let payload = [];
      for (let item in ingredients) {
        const ingredient = {
          ...ingredients[item].data(),
          id: ingredients[item].ref.id,
        };
        payload.push(ingredient);
      }
      dispatch({ type: Actions.GET_INGREDIENTS_SUCCESS, payload });
      dispatch({ type: Actions.SET_NEEDS_MAPPING_TRUE });
    });
  }
}

export const setIngredientToEdit = (id) => {
  return (dispatch, getState) => {
    const payload = getState().ingredients.find(item => item.id === id);
    dispatch({ type: Actions.SET_INGREDIENT_TO_EDIT, payload });
  }
}

export const createIngredient = (formValues) => {
  return (dispatch) => {
    const { uid } = auth.currentUser;
    const payload = { ...formValues, uid };
    db.collection('ingredients').add(payload)
    .then(docRef => {
      // Unnecessary; Firebase is listening for updates
      // dispatch({ type: Actions.ADD_INGREDIENT_SUCCESS, payload });
      dispatch({ type: Actions.SET_MODAL_CLOSED });
    })
    .catch(error => console.log('Error adding document: ', error));
  }
}

export const updateIngredient = (id, formValues) => {
  return (dispatch) => {
    const { uid } = auth.currentUser;
    const payload = { ...formValues, uid };
    db.collection('ingredients').doc(id).update(payload)
    .then(() => {
      dispatch({ type: Actions.UPDATE_INGREDIENT_SUCCESS, payload });
      dispatch({ type: Actions.RESET_INGREDIENT_TO_EDIT });
      dispatch({ type: Actions.SET_MODAL_CLOSED });
    })
    .catch(error => console.log('Error updating: ', error))
  }
}

export const updateIngredientMeasurement = (item, inc=true) => {
  return (dispatch) => {
    const { uid } = auth.currentUser;
    const { id, measurement } = item;
    const newMeasurement = inc ? parseInt(measurement) + 1 : parseInt(measurement) - 1;
    const payload = {
      ...item,
      measurement: newMeasurement >= 1 ? newMeasurement : 1,
      uid,
    };
    db.collection('ingredients').doc(id).update(payload)
    .then(() => dispatch({ type: Actions.UPDATE_INGREDIENT_SUCCESS, payload }))
    .catch(error => console.log('Error updating: ', error))
  }
}

export const deleteIngredient = (id) => {
  return (dispatch) => {
    db.collection('ingredients').doc(id).delete()
    .then(() => dispatch({ type: Actions.DELETE_INGREDIENT_SUCCESS, payload: id }))
    .catch(error => console.log('Error removing document: ', error));
  }
}