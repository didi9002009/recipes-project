import React, { Component } from 'react';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { db, auth } from '../firebase.js';
import { withAuth } from '../hocs/withAuth';
import Nav from '../components/Nav';
import { RecipeContainer, RecipeHeader } from '../components/styles/Views';

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
        <RecipeContainer>
          <Link to='/'>
            <FontAwesomeIcon icon={faHome} size="1x" className="big-icon" />
            <span>Home</span>
          </Link>
          <RecipeHeader bgImage={recipe.largeImageUrl}>
            { recipe.title && <h1>{ recipe.title }</h1> }
          </RecipeHeader>
          { recipe.instructions && <div dangerouslySetInnerHTML={{__html: recipe.instructions.replace(/\n/g, "<br />")}}></div> }
        </RecipeContainer>
      </>
    )
  }
}

export default withAuth(Recipe);