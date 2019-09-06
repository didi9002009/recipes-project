import React, { Component } from 'react';
import { Link } from '@reach/router';
import { db, auth } from '../firebase.js';
import { withAuth } from '../hocs/withAuth';
import { TabsContainer, Tab } from '../components/styles/Nav';
import { RecipeContainer } from '../components/styles/Views';

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
    const { recipe } = this.state;
    return recipe && (
      <>
        <TabsContainer>
          <Tab alignLeft><Link to='/'>Home</Link></Tab>
        </TabsContainer>
        <RecipeContainer>
          { recipe.title && <h1>{ recipe.title }</h1> }
          { recipe.largeImageUrl && <img src={ recipe.largeImageUrl } alt={ recipe.title } /> }
          { recipe.instructions && <div dangerouslySetInnerHTML={{__html: recipe.instructions.replace("\n", "<br />")}}></div> }
        </RecipeContainer>
      </>
    )
  }
}

export default withAuth(Recipe);