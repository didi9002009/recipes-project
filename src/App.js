import React, { Component } from 'react';
import db from './firebase';

class App extends Component {
  state = {
    ingredients: [],
  }

  componentDidMount = () => {
    db.collection('ingredients').onSnapshot(snapshot => {
      let ingredients = snapshot.docs;
      let newState = [];
      for (let item in ingredients) {
        newState.push(ingredients[item].data());
      }
      this.setState({
        ingredients: newState,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Current Ingredients</h1>
        <ul>
        { this.state.ingredients.map(item => (
          <li key={item.label}>{item.measurement} {item.unit} {item.label}</li>
        ))}
        </ul>
      </div>
    );
  }
}

export default App;
