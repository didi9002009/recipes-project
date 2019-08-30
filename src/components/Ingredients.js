import React, { Component } from 'react';
import db from '../firebase';

class Ingredients extends Component {
  state = {
    ingredients: [],
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

  editIngredient = (id) => {
    const targetIngredient = this.state.ingredients.find(item => item.id === id);
    this.props.setTargetIngredient(targetIngredient);
  }

  resetEditIngredient = () => {
    this.setState({
      targetIngredient: null,
    });
  }

  render() {
    return (
      <div className="ingredients">
        <h1>Current Ingredients</h1>
        <ul>
        { this.state.ingredients.map(item => (
          <li key={item.id}>{item.measurement} {item.unit} {item.label} | <button onClick={() => this.deleteIngredient(item.id)}>Delete</button> | <button onClick={() => this.editIngredient(item.id)}>Edit</button></li>
        ))}
        </ul>
      </div>
    );
  }
}

export default Ingredients;
