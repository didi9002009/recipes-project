import React, { Component } from 'react';
import db from '../firebase';

class Recipes extends Component {
  state = {
    recipes: [],
  }

  componentDidMount = () => {
    db.collection('recipes').onSnapshot(snapshot => {
      let recipes = snapshot.docs;
      let newState = [];
      for (let item in recipes) {
        const recipe = {
          ...recipes[item].data(),
          id: recipes[item].ref.id,
        }
        console.log('recipe: ', recipe)
        newState.push(recipe);
      }
      this.setState({
        recipes: newState,
      })
    })
  }

  render() {
    return (
      <div className="recipes">
        <h1>Current Recipes</h1>
        <ul>
        { this.state.recipes.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
        </ul>
      </div>
    );
  }
}

export default Recipes;
