import React, { Component } from 'react';
import { db, auth } from '../firebase.js';
import { withAuth } from '../hocs/withAuth';

class Recipe extends Component {
  state = {
    recipe: null,
  }

  componentDidMount = () => {
    const { recipeId } = this.props;
    const { uid } = auth.currentUser;

    db.collection('recipes').where("uid", "==", uid).onSnapshot(snapshot => {
      try {
        const recipe = snapshot.docs.find(doc => doc.id === recipeId).data();
        if (recipe) {
          this.setState({ recipe });
        } else {
          console.log('No document exists');
        }
      } catch (error) {
        console.log('Error retrieving document')
      }
    });
  }

  render() {
    return (
      <h1>{ this.state.recipe && this.state.recipe.title ? this.state.recipe.title : 'Recipe loading...' }</h1>
    )
  }
}

export default withAuth(Recipe);