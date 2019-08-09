import React, { Component } from 'react';
import db from './firebase';

class App extends Component {
  state = {
    ingredients: [],
    ingredientToAdd: {
      label: '',
      measurement: 0,
      unit: '',
      id: '',
    },
  }

  componentDidMount = () => {
    // update on value change
    db.collection('ingredients').onSnapshot(snapshot => {
      let ingredients = snapshot.docs;
      let newState = [];
      for (let item in ingredients) {
        const ingredient = {
          ...ingredients[item].data(),
          id: ingredients[item].ref.id,
        };
        console.log('ingredient: ', ingredient)
        newState.push(ingredient);
      }
      this.setState({
        ingredients: newState,
      });
    });
  }

  addIngredient = () => {
    const { label, measurement, unit } = this.state.ingredientToAdd;
    console.log('Adding: ', label, measurement, unit)
    db.collection('ingredients').add({
      label,
      measurement,
      unit
    })
    .then(docRef => {
      console.log('Document written with ID: ', docRef);
      this.setState({
        ingredientToAdd: {
          label: '',
          measurement: 0,
          unit: '',
        }
      });
    })
    .catch(error => console.log('Error adding document: ', error));
  }

  updateIngredient = (id) => {
    const { label, measurement, unit } = this.state.ingredientToAdd;
    console.log(`Updating ${id}: `, label, measurement, unit);
    db.collection('ingredients').doc(id).set({
      label,
      measurement,
      unit
    })
    .then(() => console.log(`Document ${id} successfully updated!`))
    .catch(error => console.log('Error updating: ', error))
    this.setState({
      ingredientToAdd: {
        label: '',
        measurement: '',
        unit: '',
        id: '',
      }
    })
  }

  deleteIngredient = (id) => {
    console.log('Deleting: ', id)
    db.collection('ingredients').doc(id).delete()
    .then(() => console.log(`Document ${id} successfully deleted!`))
    .catch(error => console.log('Error removing document: ', error))
  }

  editIngredient = (id) => {
    const targetIngredient = this.state.ingredients.find(item => item.id === id);
    this.setState({
      ingredientToAdd: targetIngredient,
    });
  }

  handleInputChange = (event) => {
    this.setState({
      ingredientToAdd: {
        ...this.state.ingredientToAdd,
        [event.target.name]: event.target.value,
      }
    });
  }

  render() {
    return (
      <>
      <div className="ingredients">
        <h1>Current Ingredients</h1>
        <ul>
        { this.state.ingredients.map(item => (
          <li key={item.id}>{item.measurement} {item.unit} {item.label} | <button onClick={() => this.deleteIngredient(item.id)}>Delete</button> | <button onClick={() => this.editIngredient(item.id)}>Edit</button></li>
        ))}
        </ul>
      </div>
      <div className="add-ingredient">
        <h2>{this.state.ingredientToAdd.id ? 'Edit' : 'Add' } Ingredient</h2>
        <label htmlFor="label">
          Name:
          <input type="text" id="label" name="label" onChange={this.handleInputChange} value={this.state.ingredientToAdd.label} /><br />
        </label>
        <label htmlFor="measurement">
          Number:
          <input type="number" id="measurement" name="measurement" onChange={this.handleInputChange} value={this.state.ingredientToAdd.measurement} /><br />
        </label>
        <label htmlFor="unit">
          Unit:
          <input type="text" id="unit" name="unit" onChange={this.handleInputChange} value={this.state.ingredientToAdd.unit} /><br />
        </label>
        <button onClick={this.state.ingredientToAdd.id ? () => this.updateIngredient(this.state.ingredientToAdd.id) : this.addIngredient}>Save</button>
      </div>
      </>
    );
  }
}

export default App;
