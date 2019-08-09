import React, { Component } from 'react';
import db from './firebase';

class App extends Component {
  state = {
    ingredients: [],
    ingredientToAdd: {
      label: '',
      measurement: 0,
      unit: '',
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
          <li key={item.label}>{item.measurement} {item.unit} {item.label}</li>
        ))}
        </ul>
      </div>
      <div className="add-ingredient">
        <h2>Add Ingredient</h2>
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
        <button onClick={this.addIngredient}>Save</button>
      </div>
      </>
    );
  }
}

export default App;
