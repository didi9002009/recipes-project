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