import React, { Component } from 'react';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { db, auth } from '../firebase.js';
import { withAuth } from '../hocs/withAuth';
import Nav from '../components/Nav';
import { StyledIngredientsMain, StyledCurrentIngredientsSection, StyledQuickAddIngredientsSection, StyledIngredientListItem } from '../components/styles/Views';

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
        if (recipe) this.setState({ recipe });
        else console.log('No document exists');
      } catch (error) {
        console.log('Error retrieving document')
      }
    });
  }

  render() {
    const { recipe } = this.state;
    return recipe && (
      <>
        <Nav path={this.props.path} />

        <StyledIngredientsMain>
          <StyledCurrentIngredientsSection>
            <h1>{ recipe.title }</h1>
            { recipe.largeImageUrl && <img src={recipe.largeImageUrl} alt={recipe.title} />}
            <h2>Ingredients</h2>
            <ul>
              { recipe.ingredients.map(ingredient => (
                <StyledIngredientListItem>
                  { ingredient }
                </StyledIngredientListItem>
              ))}
            </ul>
            <h2>Instructions</h2>
            { recipe.instructions && <div dangerouslySetInnerHTML={{__html: recipe.instructions.replace(/\n/g, "<br />")}}></div> }
          </StyledCurrentIngredientsSection>
          <StyledQuickAddIngredientsSection>
            <h2>What you have</h2>
            <p>Coming soon!</p>
          </StyledQuickAddIngredientsSection>
        </StyledIngredientsMain>
      </>
    )
  }
}

export default withAuth(Recipe);