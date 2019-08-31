import React, { Component } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import db from '../firebase';
import { RecipesList } from './styles/Views';
import { AddButton } from './styles/Buttons';

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
      <RecipesList>
        <h1>My Recipes</h1>
        <Accordion allowZeroExpanded>
        { this.state.recipes.map(item => (
          <AccordionItem key={item.id}>
            <AccordionItemHeading>
              <AccordionItemButton>
                {item.title}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {item.instructions}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
        </Accordion>
        <AddButton onClick={() => this.props.openModal(true)}>+ Recipe</AddButton>
      </RecipesList>
    );
  }
}

export default Recipes;
