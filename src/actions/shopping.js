import { db, auth } from '../firebase';
import { Actions } from './actions';

export const getShoppingList = () => {
  return (dispatch) => {
    const { uid } = auth.currentUser;
    db.collection('shopping').where("uid", "==", uid).onSnapshot(snapshot => {
      let shoppingList = snapshot.docs;
      let payload = [];
      for (let item in shoppingList) {
        const listItem = {
          ...shoppingList[item].data(),
          id: shoppingList[item].ref.id,
        }
        payload.push(listItem);
      }
      dispatch({ type: Actions.GET_SHOPPING_LIST_SUCCESS, payload });
    });
  }
}

export const addIngredientsToShoppingList = (ingredients) => {
  return (dispatch) => {
    const { uid } = auth.currentUser;
    ingredients.map(label => {
      const payload = {
        label,
        uid,
        unit: 'unit',
        measurement: 1,
        done: false,
      };
      db.collection('shopping').add(payload)
      .then(docRef => {
        // Unnecessary; Firebase is listening for updates
        // dispatch({ type: Actions.ADD_LIST_INGREDIENT_SUCCESS, payload });
      })
      .catch(error => console.log('Error adding document: ', error))
    });
  };
}

export const createListIngredient = (formValues) => {
  return (dispatch) => {
    const { uid } = auth.currentUser;
    const { label, unit, measurement } = formValues;
    const payload = {
      label,
      unit,
      measurement,
      uid,
      done: false,
    };
    db.collection('shopping').add(payload)
    .then(docRef => {
      // Unnecessary; Firebase is listening for updates
      // dispatch({ type: Actions.ADD_LIST_INGREDIENT_SUCCESS, payload });
      dispatch({ type: Actions.SET_MODAL_CLOSED });
    })
    .catch(error => console.log('Error adding document: ', error));
  }
}

export const toggleDone = (item) => {
  return (dispatch) => {
    const { uid } = auth.currentUser;
    const done = !item.done;
    const payload = {
      ...item,
      done,
      uid
    };
    db.collection('shopping').doc(item.id).update(payload)
    .then(() => {
      // Unnecessary; Firebase is listening for updates
      // dispatch({ type: Actions.UPDATE_LIST_INGREDIENT_SUCCESS, payload });
    })
    .catch(error => console.log('Error updating: ', error))
  }
}

export const updatePantry = () => {
  return (dispatch, getState) => {
    const { uid } = auth.currentUser;
    const doneListItems = getState().shopping.filter(item => item.done);
    doneListItems.forEach(item => {
      const { label, measurement, unit, id } = item;
      const ingredient = {
        label,
        measurement,
        unit,
        uid,
      }
      db.collection('ingredients').add(ingredient)
      .then(docRef => {
        // Unnecessary; Firebase is listening for updates
        // dispatch({ type: Actions.ADD_INGREDIENT_SUCCESS, payload });
      })
      .catch(error => console.log('Error adding document: ', error));

      db.collection('shopping').doc(id).delete()
      .then(() => dispatch({ type: Actions.DELETE_LIST_INGREDIENT_SUCCESS, payload: id }))
      .catch(error => console.log('Error removing document: ', error));
    })
  }
}