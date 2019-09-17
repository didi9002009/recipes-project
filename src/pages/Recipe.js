import React, { Component } from 'react';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { db, auth } from '../firebase.js';
import Nav from '../components/Nav';
import { StyledIngredientsMain, StyledCurrentIngredientsSection, StyledQuickAddIngredientsSection, StyledIngredientListItem } from '../components/styles/Views';

class Recipe extends Component {
  componentDidMount = () => {
    console.log('Mounted Recipe!')
  }
  render() {
    console.log('Rendered Recipe!')
    const { activeRecipe } = this.props.app;
    return activeRecipe && (
      <StyledIngredientsMain>
        <StyledCurrentIngredientsSection>
          <h1>{ activeRecipe.title }</h1>
          { activeRecipe.largeImageUrl && <img src={activeRecipe.largeImageUrl} alt={activeRecipe.title} />}
          <h2>Ingredients</h2>
          <ul>
            { activeRecipe.ingredients.map((ingredient, index) => (
              <StyledIngredientListItem key={index}>
                { ingredient }
              </StyledIngredientListItem>
            ))}
          </ul>
          <h2>Instructions</h2>
          { activeRecipe.instructions && <div dangerouslySetInnerHTML={{__html: activeRecipe.instructions.replace(/\n/g, "<br />")}}></div> }
        </StyledCurrentIngredientsSection>
        <StyledQuickAddIngredientsSection>
          <h2>What you have</h2>
          <p>Coming soon!</p>
        </StyledQuickAddIngredientsSection>
      </StyledIngredientsMain>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app,
  }
}

export default connect(mapStateToProps)(Recipe);